import { useReducer } from 'react'
import { assocPath, path, pathOr, length, pipe, is, curry } from 'rambda'

const isInt = is(Number)

const remove = (start, count, list) => {
  const result = Array.prototype.slice.call(list, 0)
  result.splice(start, count)
  return result
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'change':
      return pipe(assocPath(payload.key, payload.value), assocPath('title', payload.value))(state)
    case 'add':
      return assocPath(
        payload.key,
        [
          ...path(payload.key, state),
          {
            __key: Math.random()
              .toString(36)
              .substring(5),
          },
        ],
        state
      )
    case 'remove': {
      const oldArray = path(payload.key, state)
      const index = isInt(payload.index) ? payload.index : length(oldArray) - 1
      const newArray = remove(index, 1, oldArray)
      return assocPath(payload.key, newArray, state)
    }
    default:
      return state
  }
}

export default function useForm(values) {
  const initialState = {
    values,
  }

  const [state, _dispatch] = useReducer(reducer, initialState)

  const dispatch = (type, payload) =>
    _dispatch({
      type,
      payload,
    })

  const getKey = key => `values.${key}`

  const change = (key, value) => dispatch('change', { key: getKey(key), value })

  const getValue = key => path(getKey(key), state)

  const field = key => ({
    onChange: event => change(key, event.target.value),
    value: getValue(key),
  })

  const checkbox = key => ({
    onChange: event => change(key, event.target.checked),
    checked: getValue(key),
  })

  const radio = (key, value) => ({
    onChange: () => change(key, value),
    checked: getValue(key) === value,
    label: value,
  })

  const array = (key, render) =>
    render({
      add: () => dispatch('add', { key: getKey(key) }),
      remove: index => dispatch('remove', { key: getKey(key), index }),
      items: getValue(key),
    })

  const setFieldValue = curry((key, event) => {
    const value = pathOr(event, ['target', 'value'], event)
    change(key, value)
  })

  return {
    field,
    array,
    checkbox,
    radio,
    setFieldValue,
    ...state,
  }
}

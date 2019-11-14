import React, { useReducer } from 'react'
import { assocPath, path, pathOr, length, pipe, is, curry } from 'rambda'

const isInt = is(Number)

const remove = (start, count, list) => {
  var result = Array.prototype.slice.call(list, 0)
  result.splice(start, count)
  return result
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'change':
      return pipe(
        assocPath(payload.key, payload.value),
        assocPath('title', payload.value),
      )(state)
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
        state,
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

  const change = (key, value) => dispatch('change', { key: getKey(key), value })

  const getKey = key => `values.${key}`

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

  return { field, array, checkbox, radio, setFieldValue, ...state }
}

// export default function Home() {
//   const user = useCurrentUser();

//   const {
//     values,
//     field,
//     array,
//     checkbox,
//     radio,
//     setFieldValue,
//     onSubmit
//   } = useForm({
//     title: "",
//     tos: false,
//     subscribe: true,
//     radio: null,
//     details: {
//       firstname: "Leeroy",
//       lastname: "Jenkins"
//     },
//     tags: [{ id: 1, name: "DIF" }, { id: 2, name: "Krönika" }]
//   });

//   return (
//     <Container>
//       <div>Home</div>
//       <div>
//         <Input label="Titel" {...field("title")} />
//       </div>
//       <Spacer />
//       <div>
//         <Input label="Titel" {...field("title")} error="Wrong email" />
//       </div>
//       <Spacer />
//       <div>
//         <Label>Title</Label>
//         <Input value={values.title} onChange={setFieldValue("title")} />
//       </div>
//       <Spacer />
//       <div>
//         <input
//           value={values.title}
//           onChange={event => setFieldValue("title", event.target.value)}
//         />
//       </div>
//       <div>
//         <button
//           onClick={() => {
//             setFieldValue("details.firstname", "Joe");
//             setFieldValue("details.lastname", "Doe");
//           }}
//         >
//           Set Joe Doe as name
//         </button>
//       </div>
//       <div>
//         <input {...field("details.firstname")} />
//       </div>
//       <div>
//         <input {...field("details.lastname")} />
//       </div>
//       <div>
//         <div>
//           <label>
//             <input type="checkbox" {...checkbox("tos")} />I agree the terms
//           </label>
//         </div>
//         <div>
//           <label>
//             <input type="checkbox" {...checkbox("subscribe")} />I want subscribe
//             for mails
//           </label>
//         </div>
//         <label>
//           <input type="radio" {...radio("radio", "iTunes")} />
//           iTunes
//         </label>
//         <label>
//           <input type="radio" {...radio("radio", "Spotify")} />
//           Spotify
//         </label>
//       </div>
//       {array("tags", ({ add, remove, items }) => (
//         <>
//           {items.map((item, index) => (
//             <div key={index}>
//               <Input {...field(`tags.${index}.id`)} />
//               <Input {...field(`tags.${index}.name`)} />
//               <button onClick={() => remove(index)}>remove</button>
//             </div>
//           ))}
//           <div>
//             <button onClick={add}>add</button>
//           </div>
//         </>
//       ))}
//       {user && <div>Hello {user.nick}</div>}

//       <pre>{JSON.stringify(values, null, 2)}</pre>
//     </Container>
//   );
// }

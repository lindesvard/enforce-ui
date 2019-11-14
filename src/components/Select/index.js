import React, {
  useEffect, useState, useRef,
} from 'react'
import PropTypes from 'prop-types'
import { FiChevronDown } from 'react-icons/fi'
import {
  Base, Select, SelectedValue, DropDown, DropDownItem,
} from './styled'
import useFocus from '../../hooks/useFocus'
import useForm from '../../hooks/useForm'
import useClickOutside from '../../hooks/useClickOutside'
import { domOnChangeEvent } from '../../lib/eventHelper'
import Input from '../Input'
import Rotate from '../Rotate'

const getProperty = (key, option) => (typeof option === 'object' ? option[key] : option || option)

const SelectComponent = ({
  options = [],
  onChange,
  value,
  advanced = false,
  onSearch,
  ...props
}) => {
  const base = useRef()
  const [loading, setLoading] = useState(false)
  const { field, values: { search } } = useForm({ search: '' })
  const {
    focus, onFocus, onBlur,
  } = useFocus(props)

  useEffect(() => {
    if (onSearch) {
      setLoading(true)
      onSearch(search).then(() => {
        setLoading(false)
      })
    }
  }, [search])

  useEffect(onBlur, [value])

  useClickOutside(base, onBlur)

  return (
    <Base focus={focus} onClick={onFocus} ref={base}>
      {advanced ? (
        <>
          <SelectedValue>
            {getProperty('label', options.find((option) => getProperty('id', option) === value))}
          </SelectedValue>
          <DropDown visible={focus}>
            <DropDownItem empty>
              <Input border={false} placeholder="Search your stuff" {...field('search')} loading={loading} />
            </DropDownItem>
            {options.length === 0 && (
            <DropDownItem>
              No result
            </DropDownItem>
            )}
            {options.map((option) => (
              <DropDownItem key={getProperty('id', option)} onClick={() => onChange(domOnChangeEvent(getProperty('id', option)))}>
                {getProperty('label', option)}
              </DropDownItem>
            ))}
          </DropDown>
        </>
      ) : (
        <Select {...props} onFocus={onFocus} onBlur={onBlur}>
          {options.map((option) => (
            <option value={getProperty('id', option)} key={getProperty('id', option)}>
              {getProperty('label', option)}
            </option>
          ))}
        </Select>
      )}
      <Rotate deg={focus && advanced ? '180deg' : '0deg'}>
        <FiChevronDown />
      </Rotate>
    </Base>
  )
}

SelectComponent.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.any,
  advanced: PropTypes.bool,
  onSearch: PropTypes.func,
}

export default SelectComponent

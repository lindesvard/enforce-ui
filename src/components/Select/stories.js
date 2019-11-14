import React, { useCallback } from 'react'
import debounce from 'debounce-promise'
import Select from '.'
import Label from '../Label'
import useForm from '../../hooks/useForm'

export default {
  title: 'Select',
}

export const Default = () => {
  const { field } = useForm({ name: '' })
  return <Select {...field('name')} />
}

export const WithLabelInside = () => {
  const { field } = useForm({ name: '' })
  return <Select label="Your first name" {...field('name')} />
}

export const WithLabelOutside = () => {
  const { field } = useForm({ name: '' })
  return (
    <>
      <Label>Your first name</Label>
      <Select {...field('name')} />
    </>
  )
}

export const WithError = () => {
  const { field } = useForm({ name: '' })
  return <Select label="Your first name" error="Some error" {...field('name')} />
}

export const WithAdvanced = () => {
  const { field, setFieldValue, values: { options } } = useForm({ name: '', options: [] })

  const handleSearch = useCallback(debounce(async (query) => {
    const url = `https://jsonplaceholder.typicode.com/users?q=${query}`

    const response = await fetch(url)
    const body = await response.json()
    setFieldValue('options', body)
  }, 100), [])

  return (
    <div>
      <Select label="Your first name" error="Some error" advanced onSearch={handleSearch} options={options.map(({ id, username }) => ({ id, label: username }))} {...field('name')} />
    </div>
  )
}

import React from 'react'
import Input from './'
import Label from '../Label'
import useForm from '../../hooks/useForm'
import { FiLock } from 'react-icons/fi'

export default {
  title: 'Input',
}

export const Default = () => {
  const { field } = useForm({ name: '' })
  return <Input {...field('name')} />
}

export const WithLabelInside = () => {
  const { field } = useForm({ name: '' })
  return <Input label="Your first name" {...field('name')} />
}

export const WithLabelOutside = () => {
  const { field } = useForm({ name: '' })
  return (
    <>
      <Label>Your first name</Label>
      <Input {...field('name')} />
    </>
  )
}

export const WithError = () => {
  const { field } = useForm({ name: '' })
  return <Input label="Your first name" error="Some error" {...field('name')} />
}

export const WithLoading = () => {
  const { field } = useForm({ name: '' })
  return <Input label="Your first name" loading icon={FiLock} {...field('name')} />
}

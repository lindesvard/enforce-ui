import React from 'react'
import Checkbox from '.'
import Label from '../Label'
import useForm from '../../hooks/useForm'

export default {
  title: 'Checkbox',
}

export const Default = () => {
  const { checkbox } = useForm({ tos: true })
  return <Checkbox {...checkbox('tos')} label="Do you agree with our terms?" />
}

export const SeveralInline = () => {
  const { checkbox } = useForm({ tos: true })
  return [
    <Checkbox {...checkbox('tos')} label="Do you agree with our terms?" />,
    <Checkbox {...checkbox('tos')} label="Do you agree with our terms?" />,
  ]
}

export const SeveralBlock = () => {
  const { checkbox } = useForm({ tos: true })
  return [
    <Checkbox
      {...checkbox('tos')}
      block
      label="Do you agree with our terms?"
    />,
    <Checkbox
      {...checkbox('tos')}
      block
      label="Do you agree with our terms?"
    />,
  ]
}

export const WithLabel = () => {
  const { checkbox } = useForm({ tos: true })
  return (
    <>
      <Label>What candy do you like?</Label>
      <Checkbox
        {...checkbox('tos')}
        block
        label="Do you agree with our terms?"
      />
    </>
  )
}

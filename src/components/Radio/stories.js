import React from 'react'
import Radio from '.'
import Label from '../Label'
import useForm from '../../hooks/useForm'

export default {
  title: 'Radio',
}

export const Default = () => {
  const { radio } = useForm({ drink: 'cola' })
  return <Radio {...radio('drink', 'Cola')} />
}

export const SeveralInline = () => {
  const { radio } = useForm({ cola: 'cola' })
  return [
    <Radio {...radio('drink', 'Cola')} />,
    <Radio {...radio('drink', 'Pepsi')} />,
  ]
}

export const SeveralBlock = () => {
  const { radio } = useForm({ cola: 'cola' })
  return [
    <Radio {...radio('drink', 'Cola')} block />,
    <Radio {...radio('drink', 'Pepsi')} block />,
  ]
}

export const WithLabel = () => {
  const { radio } = useForm({ cola: 'cola' })
  return (
    <>
      <Label>What drinks do you like most?</Label>
      <Radio {...radio('drink', 'Cola')} block />
      <Radio {...radio('drink', 'Pepsi')} block />
    </>
  )
}

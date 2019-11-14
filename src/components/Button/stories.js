import React, { useState } from 'react'
import Button from './'
import {FiUser} from 'react-icons/fi'

export default {
  title: 'Button',
}

export const Default = () => {
  return <Button>Button</Button>
}

export const Warning = () => {
  return <Button warning>Button</Button>
}

export const Error = () => {
  return <Button error >Button</Button>
}

export const Success = () => {
  return <Button success >Button</Button>
}

export const Info = () => {
  return <Button info >Button</Button>
}

export const Small = () => {
  return <Button small>Button</Button>
}

export const Large = () => {
  return <Button large>Button</Button>
}

export const LeftIcon = () => {
  return <Button leftIcon={FiUser}>Button</Button>
}

export const RightIcon = () => {
  return <Button rightIcon={FiUser}>Button</Button>
}

export const Loading = () => {
  return <Button loading>Button</Button>
}

export const LoadingSuccess = () => {
  return <Button success loading>Button</Button>
}
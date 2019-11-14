import React from 'react'
import { action } from '@storybook/addon-actions'
import { FiUser } from 'react-icons/fi'
import Button from '.'

export default {
  title: 'Button',
}

const props = {
  onClick: action('onClick'),
}

export const Default = () => <Button {...props}>Button</Button>

export const Warning = () => <Button {...props} warning>Button</Button>

export const Error = () => <Button {...props} error>Button</Button>

export const Success = () => <Button {...props} success>Button</Button>

export const Info = () => <Button {...props} info>Button</Button>

export const Small = () => <Button {...props} small>Button</Button>

export const Large = () => <Button {...props} large>Button</Button>

export const LeftIcon = () => <Button {...props} leftIcon={FiUser}>Button</Button>

export const RightIcon = () => <Button {...props} rightIcon={FiUser}>Button</Button>

export const Loading = () => <Button {...props} loading>Button</Button>

export const LoadingSuccess = () => <Button {...props} success loading>Button</Button>

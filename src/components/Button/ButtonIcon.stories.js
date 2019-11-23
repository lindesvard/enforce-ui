import React from 'react'
import { action } from '@storybook/addon-actions'
import { FiUser } from 'react-icons/fi'
import { ButtonIcon } from '.'

export default {
  title: 'ButtonIcon',
}

const props = {
  onClick: action('onClick'),
  Icon: FiUser,
}

export const Default = () => <ButtonIcon {...props}>ButtonIcon</ButtonIcon>

export const Warning = () => <ButtonIcon {...props} warning>ButtonIcon</ButtonIcon>

export const Error = () => <ButtonIcon {...props} error>ButtonIcon</ButtonIcon>

export const Success = () => <ButtonIcon {...props} success>ButtonIcon</ButtonIcon>

export const Info = () => <ButtonIcon {...props} info>ButtonIcon</ButtonIcon>

export const Light = () => <ButtonIcon {...props} light>ButtonIcon</ButtonIcon>

export const Small = () => <ButtonIcon {...props} small>ButtonIcon</ButtonIcon>

export const Large = () => <ButtonIcon {...props} large>ButtonIcon</ButtonIcon>

export const Loading = () => <ButtonIcon {...props} loading>ButtonIcon</ButtonIcon>

export const LoadingSuccess = () => <ButtonIcon {...props} success loading>ButtonIcon</ButtonIcon>

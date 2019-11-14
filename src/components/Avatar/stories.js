import React, { useState } from 'react'
import Avatar from './'

export default {
  title: 'Avatar',
}

export const Default = () => {
  return <Avatar src="https://avatarfiles.alphacoders.com/693/69306.jpg" />
}

export const FallbackChar = () => {
  return <Avatar fallback="HS" />
}

export const FallbackName = () => {
  return <Avatar src="https://avatarfiles.alphacoders.com/693/69306.jpgwq" fallback="Homer Simpson" />
}
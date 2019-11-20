import React, { useState } from 'react'
import Banner from '.'
import { Button } from '../Button'

export default {
  title: 'Banner',
}

export const Default = () => <Banner text="This is a banner" />

export const Warning = () => <Banner warning text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ultricies quam, quis finibus dui. Nam malesuada posuere nisi et consequat. Quisque vitae diam eget quam luctus auctor. Sed eu vehicula elit, a ullamcorper sem." />

export const Error = () => <Banner error text="This is a banner" />

export const Success = () => <Banner success text="This is a banner" />

export const Info = () => <Banner info text="This is a banner" />

export const WithClose = () => {
  const [visible, setVisible] = useState(true)
  if (visible) {
    return (
      <Banner info text="This is a banner" onClose={() => setVisible(false)} />
    )
  }

  return <Button onClick={() => setVisible(true)}>Show banner</Button>
}

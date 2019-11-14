import React, { useState } from 'react'
import Banner from './'

export default {
  title: 'Banner',
}

export const Default = () => {
  return <Banner text="This is a banner" />
}

export const Warning = () => {
  return <Banner warning text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ultricies quam, quis finibus dui. Nam malesuada posuere nisi et consequat. Quisque vitae diam eget quam luctus auctor. Sed eu vehicula elit, a ullamcorper sem." />
}

export const Error = () => {
  return <Banner error text="This is a banner" />
}

export const Success = () => {
  return <Banner success text="This is a banner" />
}

export const Info = () => {
  return <Banner info text="This is a banner" />
}

export const WithClose = () => {
  const [visible, setVisible] = useState(true)
  if (visible) {
    return (
      <Banner info text="This is a banner" onClose={() => setVisible(false)} />
    )
  }

  return <button onClick={() => setVisible(true)}>Show banner</button>
}

import React, { useState } from 'react'
import Modal from '.'
import { Column } from '../Structure'
import { Button } from '../Button'
import { Text } from '../Typography'

export default {
  title: 'Modal',
}

export const Default = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <Column p={5}>
      <Button onClick={handleShow}>Open modal</Button>
      {[...new Array(150)].map(() => <Text>Super long content</Text>)}
      <Modal
        title="Create a chat"
        show={show}
        onClose={handleClose}
        renderComplete={() => (
          <Button success onClick={handleClose}>Create</Button>
        )}
      >
        <Text>This is a basic modal and the body scroll is disabled while this is open</Text>
      </Modal>
    </Column>
  )
}

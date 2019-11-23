import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { FiX } from 'react-icons/fi'
import { disableScroll, enableScroll } from '../../lib/scroll'
import { Base, Modal, Header, Body, CloseDesktop } from './styled'
import { ButtonIcon } from '../Button'
import { Heading } from '../Typography'

const ModalComponent = ({
  children,
  onClose,
  title,
  renderComplete,
  show,
  padding = 15,
  confirmOnClose = false,
  closeOnEsc = false,
  confirmText = 'Are you sure?',
}) => {
  const el = useRef(document.createElement('div'))
  const root = document.body

  useEffect(() => {
    const element = el.current
    root.appendChild(element)

    return () => {
      root.removeChild(element)
    }
  }, [el, root])

  useEffect(() => {
    if (show) {
      disableScroll()
    }
    return () => {
      enableScroll()
    }
  }, [show])

  useEffect(() => {
    if (!show) {
      return () => {}
    }

    const handleEsc = event => {
      if (event.keyCode === 27 && closeOnEsc) {
        if (confirmOnClose && !confirm(confirmText)) {
          return
        }
        onClose()
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [closeOnEsc, confirmOnClose, show, confirmText, onClose])

  return (
    show &&
    el.current &&
    createPortal(
      <Base>
        <CloseDesktop>
          <ButtonIcon large Icon={FiX} onClick={onClose} />
        </CloseDesktop>
        <Modal>
          <Header>
            <Heading>{title}</Heading>
            {renderComplete && renderComplete()}
          </Header>
          <Body padding={padding} data-scroll-lock-scrollable>
            {children}
          </Body>
        </Modal>
      </Base>,
      el.current
    )
  )
}

ModalComponent.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  title: PropTypes.string,
  renderComplete: PropTypes.func,
  show: PropTypes.bool,
  padding: PropTypes.number,
  confirmOnClose: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  confirmText: PropTypes.string,
}

export default ModalComponent

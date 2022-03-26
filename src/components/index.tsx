import * as React from 'react'
import { createPortal } from 'react-dom'
import { createModalElement } from '../utils/createModalElement'

createModalElement()

export const HeadlessModal = ({ isOpen, children }: HeadlessModalProps) => {
  const modalDOM = document.getElementById('modal') as HTMLElement
  const Modal = <React.Fragment>{children()}</React.Fragment>
  return isOpen ? createPortal(Modal, modalDOM) : null
}

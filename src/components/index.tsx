import * as React from 'react'
import { createPortal } from 'react-dom'
import { createModalElement } from '../utils/createModalElement'

createModalElement()

export const HeadlessModal = ({
  isOpen,
  onModalClose,
  backdropAlpha = 7,
  children
}: HeadlessModalProps) => {
  const [isShown, setIsShown] = React.useState(isOpen || false)
  // const [backdropAlpha, setBackdropAlpha] = React.useState(3)

  const onClose = () => {
    onModalClose()
    setIsShown(false)
  }
  // const onBackdropAlpha = (value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 = 7) => {
  //   setBackdropAlpha(value)
  // }

  React.useEffect(() => {
    setIsShown(isOpen)
  }, [isOpen])

  const modalDOM = document.getElementById('modal') as HTMLElement
  const Modal = (
    <React.Fragment>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: `rgba(0, 0, 0, ${backdropAlpha * 0.1})`
        }}
        onClick={onClose}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children()}</div>
    </React.Fragment>
  )
  return isShown ? createPortal(Modal, modalDOM) : null
}

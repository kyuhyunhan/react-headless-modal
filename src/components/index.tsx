import * as React from 'react'
import { createPortal } from 'react-dom'
// import styles from './styles.module.css'

type Props = {
  defaultIsVisible?: boolean
  onIsVisible: boolean
  children: any
}

export const HeadlessModal = ({
  defaultIsVisible,
  onIsVisible,
  children
}: Props) => {
  const existedModalElem = document.querySelector('#modal')
  if (!existedModalElem) {
    const modalElem = document.createElement('div')
    const bodyElem = document.querySelector('body')
    modalElem.id = 'modal'
    bodyElem && bodyElem.append(modalElem)
  }

  const [isShown, setIsShown] = React.useState(defaultIsVisible || false)

  const onClose = () => {
    setIsShown(false)
  }

  React.useEffect(() => {
    setIsShown(onIsVisible)
  }, [onIsVisible])

  const modalDOM = document.getElementById('modal') as HTMLElement
  return isShown ? createPortal(children({ onClose }), modalDOM) : null
}

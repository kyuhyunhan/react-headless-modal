import { useState } from 'react'

export const useHeadlessModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onModalOpen = () => {
    return setIsOpen(true)
  }
  const onModalClose = () => {
    return setIsOpen(false)
  }

  return {
    isOpen,
    onModalOpen,
    onModalClose
  }
}

import { HeadlessModal } from './components'
import { useState } from 'react'

export const useHeadlessModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    return setIsModalOpen(true)
  }
  const closeModal = () => {
    return setIsModalOpen(false)
  }

  return {
    isModalOpen,
    openModal,
    closeModal
  }
}

export default HeadlessModal

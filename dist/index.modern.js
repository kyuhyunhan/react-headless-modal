import { useState, useEffect, createElement, Fragment } from 'react';
import { createPortal } from 'react-dom';

const createModalElement = () => {
  const existedModalElem = document.querySelector('#modal');

  if (!existedModalElem) {
    const modalElem = document.createElement('div');
    const bodyElem = document.querySelector('body');
    modalElem.id = 'modal';
    bodyElem && bodyElem.append(modalElem);
  }
};

createModalElement();
const HeadlessModal = ({
  isOpen,
  onModalClose,
  backdropAlpha: _backdropAlpha = 7,
  children
}) => {
  const [isShown, setIsShown] = useState(isOpen || false);

  const onClose = () => {
    onModalClose();
    setIsShown(false);
  };

  useEffect(() => {
    setIsShown(isOpen);
  }, [isOpen]);
  const modalDOM = document.getElementById('modal');
  const Modal = createElement(Fragment, null, createElement("div", {
    style: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: `rgba(0, 0, 0, ${_backdropAlpha * 0.1})`
    },
    onClick: onClose
  }), createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children()));
  return isShown ? createPortal(Modal, modalDOM) : null;
};

const useHeadlessModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onModalOpen = () => {
    return setIsOpen(true);
  };

  const onModalClose = () => {
    return setIsOpen(false);
  };

  return {
    isOpen,
    onModalOpen,
    onModalClose
  };
};

export default HeadlessModal;
export { useHeadlessModal };
//# sourceMappingURL=index.modern.js.map

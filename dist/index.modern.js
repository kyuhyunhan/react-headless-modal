import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const HeadlessModal = ({
  defaultIsVisible,
  onIsVisible,
  children
}) => {
  const existedModalElem = document.querySelector('#modal');

  if (!existedModalElem) {
    const modalElem = document.createElement('div');
    const bodyElem = document.querySelector('body');
    modalElem.id = 'modal';
    bodyElem && bodyElem.append(modalElem);
  }

  const [isShown, setIsShown] = useState(defaultIsVisible || false);

  const onClose = () => {
    setIsShown(false);
  };

  useEffect(() => {
    setIsShown(onIsVisible);
  }, [onIsVisible]);
  const modalDOM = document.getElementById('modal');
  return isShown ? createPortal(children({
    onClose
  }), modalDOM) : null;
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

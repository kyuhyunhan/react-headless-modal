import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

var HeadlessModal = function HeadlessModal(_ref) {
  var defaultIsVisible = _ref.defaultIsVisible,
      onIsVisible = _ref.onIsVisible,
      children = _ref.children;
  var existedModalElem = document.querySelector('#modal');

  if (!existedModalElem) {
    var modalElem = document.createElement('div');
    var bodyElem = document.querySelector('body');
    modalElem.id = 'modal';
    bodyElem && bodyElem.append(modalElem);
  }

  var _React$useState = useState(defaultIsVisible || false),
      isShown = _React$useState[0],
      setIsShown = _React$useState[1];

  var onClose = function onClose() {
    setIsShown(false);
  };

  useEffect(function () {
    setIsShown(onIsVisible);
  }, [onIsVisible]);
  var modalDOM = document.getElementById('modal');
  return isShown ? createPortal(children({
    onClose: onClose
  }), modalDOM) : null;
};

var useHeadlessModal = function useHeadlessModal() {
  var _useState = useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var onModalOpen = function onModalOpen() {
    return setIsOpen(true);
  };

  var onModalClose = function onModalClose() {
    return setIsOpen(false);
  };

  return {
    isOpen: isOpen,
    onModalOpen: onModalOpen,
    onModalClose: onModalClose
  };
};

export default HeadlessModal;
export { useHeadlessModal };
//# sourceMappingURL=index.modern.js.map

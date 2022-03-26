import { createElement, Fragment, useState } from 'react';
import { createPortal } from 'react-dom';

var createModalElement = function createModalElement() {
  var existedModalElem = document.querySelector('#modal');

  if (!existedModalElem) {
    var modalElem = document.createElement('div');
    var bodyElem = document.querySelector('body');
    modalElem.id = 'modal';
    bodyElem && bodyElem.append(modalElem);
  }
};

createModalElement();
var HeadlessModal = function HeadlessModal(_ref) {
  var isOpen = _ref.isOpen,
      children = _ref.children;
  var modalDOM = document.getElementById('modal');
  var Modal = createElement(Fragment, null, children());
  return isOpen ? createPortal(Modal, modalDOM) : null;
};

var useHeadlessModal = function useHeadlessModal() {
  var _useState = useState(false),
      isModalOpen = _useState[0],
      setIsModalOpen = _useState[1];

  var openModal = function openModal() {
    return setIsModalOpen(true);
  };

  var closeModal = function closeModal() {
    return setIsModalOpen(false);
  };

  return {
    isModalOpen: isModalOpen,
    openModal: openModal,
    closeModal: closeModal
  };
};

export default HeadlessModal;
export { useHeadlessModal };
//# sourceMappingURL=index.modern.js.map

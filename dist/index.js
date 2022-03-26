var React = require('react');
var reactDom = require('react-dom');

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
  var Modal = React.createElement(React.Fragment, null, children());
  return isOpen ? reactDom.createPortal(Modal, modalDOM) : null;
};

var useHeadlessModal = function useHeadlessModal() {
  var _useState = React.useState(false),
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

exports.default = HeadlessModal;
exports.useHeadlessModal = useHeadlessModal;
//# sourceMappingURL=index.js.map

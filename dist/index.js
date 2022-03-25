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
      onModalClose = _ref.onModalClose,
      _ref$backdropAlpha = _ref.backdropAlpha,
      backdropAlpha = _ref$backdropAlpha === void 0 ? 7 : _ref$backdropAlpha,
      children = _ref.children;

  var _React$useState = React.useState(isOpen || false),
      isShown = _React$useState[0],
      setIsShown = _React$useState[1];

  var onClose = function onClose() {
    onModalClose();
    setIsShown(false);
  };

  React.useEffect(function () {
    setIsShown(isOpen);
  }, [isOpen]);
  var modalDOM = document.getElementById('modal');
  var Modal = React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: "rgba(0, 0, 0, " + backdropAlpha * 0.1 + ")"
    },
    onClick: onClose
  }), React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children()));
  return isShown ? reactDom.createPortal(Modal, modalDOM) : null;
};

var useHeadlessModal = function useHeadlessModal() {
  var _useState = React.useState(false),
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

exports.default = HeadlessModal;
exports.useHeadlessModal = useHeadlessModal;
//# sourceMappingURL=index.js.map

var React = require('react');
var reactDom = require('react-dom');

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

  var _React$useState = React.useState(defaultIsVisible || false),
      isShown = _React$useState[0],
      setIsShown = _React$useState[1];

  var onClose = function onClose() {
    setIsShown(false);
  };

  React.useEffect(function () {
    setIsShown(onIsVisible);
  }, [onIsVisible]);
  var modalDOM = document.getElementById('modal');
  return isShown ? reactDom.createPortal(children({
    onClose: onClose
  }), modalDOM) : null;
};

module.exports = HeadlessModal;
//# sourceMappingURL=index.js.map

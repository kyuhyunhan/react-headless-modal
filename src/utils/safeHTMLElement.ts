import ExecutionEnvironment from 'exenv'
/*
  reactjs/react-modal 
  ./src/helpers/safeHTMLElement.js
*/
const SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {}

export const SafeHTMLCollection = ExecutionEnvironment.canUseDOM
  ? window.HTMLCollection
  : {}

export const SafeNodeList = ExecutionEnvironment.canUseDOM
  ? window.NodeList
  : {}

export const canUseDOM = ExecutionEnvironment.canUseDOM

export default SafeHTMLElement

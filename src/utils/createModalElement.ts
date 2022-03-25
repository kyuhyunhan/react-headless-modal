export const createModalElement = () => {
  const existedModalElem = document.querySelector('#modal')
  if (!existedModalElem) {
    const modalElem = document.createElement('div')
    const bodyElem = document.querySelector('body')
    modalElem.id = 'modal'
    bodyElem && bodyElem.append(modalElem)
  }
}

# react-headless-modal

> ❗️ Still working with it, not released yet.

[![NPM](https://img.shields.io/npm/v/react-headless-modal.svg)](https://www.npmjs.com/package/react-headless-modal)

## Install

```bash
npm install --save react-headless-modal
```

## Usage

```tsx
import HeadlessModal from 'react-headless-modal'
import { useHeadlessModal } from 'react-headless-modal'

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: `100vw`,
  height: '100vh',
  background: 'rgba(0,0,0,0.2)'
}
const modalStyle = {
  width: '300px',
  height: '200px',
  background: 'red'
}

const App = () => {
  const { isOpen, onModalOpen, onModalClose } = useHeadlessModal()
  const buttonClickHandler = () => {
    onModalOpen()
  }

  return (
    <>
      <button onClick={buttonClickHandler} />
      <HeadlessModal defaultIsVisible={true} onIsVisible={isOpen}>
        {() => (
          <div style={containerStyle} onClick={onModalClose}>
            <div style={modalStyle}>Modal</div>
          </div>
        )}
      </HeadlessModal>
    </>
  )
}
```

## License

MIT © [kyuhyunhan](https://github.com/kyuhyunhan)

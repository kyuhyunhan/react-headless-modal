# react-headless-modal

> ❗️ Still working with it, not released yet.

[![NPM](https://img.shields.io/npm/v/react-headless-modal.svg)](https://www.npmjs.com/package/react-headless-modal)

## Install

```bash
npm install --save react-headless-modal
```

## Usage

You have to use at least 2 div elements, one for a backdrop and the other for a modal.

```tsx
import HeadlessModal from 'react-headless-modal'
import { useHeadlessModal } from 'react-headless-modal'

const backdropStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: ' 0',
  left: '0',
  background: `rgba(0, 0, 0, 0.4)`
} as React.CSSProperties
const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: '0',
  width: '300px',
  height: '200px',
  backgroundColor: '#fff'
} as React.CSSProperties

const App = () => {
  const { isModalOpen, openModal, closeModal } = useHeadlessModal()

  const buttonClickHandler = () => {
    openModal()
  }

  return (
    <>
      <button onClick={buttonClickHandler} />
      <HeadlessModal isOpen={isModalOpen}>
        {() => (
          <>
            <div style={backdropStyle} onClick={closeModal} />
            <div style={modalStyle}>Modal</div>
          </>
        )}
      </HeadlessModal>
    </>
  )
}

export default App
```

## License

MIT © [kyuhyunhan](https://github.com/kyuhyunhan)

import { FC as ReactFC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

type Props = {}

const Modal: ReactFC<Props> = ({ children }) => {
  const [element] = useState(document.createElement('div'))
  const modalRoot = document.getElementById('modal-root')

  useEffect(() => {
    modalRoot.appendChild(element)
    return () => {
      modalRoot.removeChild(element)
    }
  }, [])

  return ReactDOM.createPortal(children, element)
}

export default Modal

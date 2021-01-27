import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

import './styles.css'


const Modal = ({ isShowing, toggle, children }) => { 
  useEffect(() => {
    const listner = function (e) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        isShowing && toggle();
      }
    }

    window.addEventListener('keyup', listner)

    return (() => {
      window.removeEventListener('keyup', listner)
    })

  }, [isShowing, toggle])

  return (
    isShowing ? ReactDom.createPortal(
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="modal">
            {children}
          </div>
        </div>
      </div>, document.body
    ) : null
  )
}



export const ModalHeader = ({ toggle, children }) => (
    <div className="modal-header">
        {children || 'Title'}
    <button 
            className="modal-button-close" 
            data-dismiss="modal" 
            aria-label="Close" 
        onClick={toggle}
    >
      &times;
    </button>    
    </div>
)

export const ModalBody = ({ children }) => (
    <div className="modal-body">
        {children}
    </div>
)

export const ModalFooter = ({ children }) => (
    <div className="modal-footer">
        {children}
  </div>
)

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
}

export default Modal;
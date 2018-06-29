import React from 'react'
import './Button.css'

export const Button = ({ onClick, text }) => (
  <a tabIndex="100"
    className="Button"
    onClick={ onClick }
    onKeyPressCapture={ (e) => {e.key === 'Enter' ? onClick(e) : null}}>{ text }</a>
)
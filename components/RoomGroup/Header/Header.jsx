import React from 'react'
import './Header.css'
import { renderCheckbox } from './util'

export const Header = ({ id, enabled, toggleEnable }) => (
  <div className="Header">
    { renderCheckbox(id, { enabled: enabled, onClick: toggleEnable }) }
    Room { id }
  </div>
)

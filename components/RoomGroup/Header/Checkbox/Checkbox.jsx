import React from 'react'

export const Checkbox = ({ enabled, onClick }) => (
  <input type="checkbox" checked={ enabled } onClick={ onClick } />
)
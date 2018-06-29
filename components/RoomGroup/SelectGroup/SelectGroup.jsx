import React from 'react'

export const SelectGroup = ({ options, value, onChange, enabled }) => (
  <select value={ value } onChange={ onChange } disabled={ !enabled }>
    { options.map((opt) => <option key={opt} value={opt}>{opt}</option>) }
  </select>
)
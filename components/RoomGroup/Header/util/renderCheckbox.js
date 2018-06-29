import React from 'react'
import { Checkbox } from '../Checkbox'

export const renderCheckbox = (id, props) => (
  id !== 1 ?
    <Checkbox { ...props } /> :
    ''
)

import React from 'react'
import './RoomGroup.css'
import { Header } from './Header'
import { SelectGroup } from './SelectGroup'

export const RoomGroup = ({
  adults,
  children,
  enabled,
  id,
  updateAdults,
  updateChildren,
  toggleEnable
}) => (
  <div className={ `RoomGroup RoomGroup--enabled-${enabled} `}>
    <Header id={ id } enabled={ enabled } toggleEnable={ toggleEnable(enabled) } />
    <div className="RoomGroup-body">
      <div>
        Adults (18+)
        <SelectGroup options={[ 1, 2 ]} onChange={ updateAdults } value={ adults } enabled={ enabled } />
      </div>
      <div>
        Children (0-17)
        <SelectGroup options={[ 0, 1, 2 ]} onChange={ updateChildren } value={ children } enabled={ enabled } />
      </div>
    </div>
  </div>
)

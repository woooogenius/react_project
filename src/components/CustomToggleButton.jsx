import React from 'react'
import ToggleButton from 'react-toggle-button'

export default function CustomToggleButton() {
  return (
    <ToggleButton
  inactiveLabel={''}
  activeLabel={''}
  colors={{
    activeThumb: {
      base: 'rgb(250,250,250)',
    },
    inactiveThumb: {
      base: 'rgb(62,130,247)',
    },
    active: {
      base: 'rgb(207,221,245)',
      hover: 'rgb(177, 191, 215)',
    },
    inactive: {
      base: 'rgb(65,66,68)',
      hover: 'rgb(95,96,98)',
    },
  }}
  trackStyle={{height: 32}}
  thumbStyle={{height: 26, width: 26, right:0}}

  value={true}
  onToggle={(value) => {
    
  }} />
  )
}

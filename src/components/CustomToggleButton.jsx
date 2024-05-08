import React, { useState } from 'react'

export default function CustomToggleButton() {

  const [isClick, setIsClick] = useState(false)
  const handleClick = ()=>{
    setIsClick(!isClick)
  }

  return (
    <div className={`w-[58px] h-[35px] rounded-full focus:outline-none ${isClick ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={handleClick}>
      <span className={`inline-block overflow-hidden w-[30px] h-[30px] leading-[30px]  bg-white rounded-full shadow-md transform transition ${isClick ? 'translate-x-[26px] translate-y-[2px]' : 'translate-x-[3px] translate-y-[2px]'}`}></span>
    </div>
  )
}

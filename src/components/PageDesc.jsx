import React from 'react'

export default function PageDesc({desc01, desc02}) {
  return (
    <>
        <div className='text-[16px] text-[#525252] pt-[40px] mobile:text-[14px]'>
            <p>{desc01}</p>
            <p>{desc02}</p>
        </div> 
    </>
  )
}

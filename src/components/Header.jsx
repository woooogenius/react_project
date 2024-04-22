import React, { useState } from 'react'



export default function Header() {

    const [isScroll, setIsScroll] = useState(false)
    const onScroll = ()=>{
        if(window.scrollY > 80){
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }
    }

    window.addEventListener('scroll', onScroll)
    

    const scrolled = isScroll ? 'bg-white text-black' : 'bg-black'

  return (
    <>
        <div className={`w-full px-[250px] border-b border-gray-200 bg-black ${scrolled} fixed top-0 transition`}>
            <div className='h-[80px] flex flex-row items-center justify-between'>
                <div className='w-[142px] h-[44px]'>
                    <img src={process.env.PUBLIC_URL+'assets/img/google.png'}  alt="img"/>
                </div>

                <ul className='flex flex-row text-[18px] '>
                    <li><a href="#!" className={`mr-[115px] text-white ${scrolled} transition`}>메시지</a></li>
                    <li><a href="#!" className={`mr-[115px] text-white ${scrolled} transition`}>크레딧</a></li>
                    <li><a href="#!" className={`text-white ${scrolled} transition`}>고객센터</a></li>
                </ul>
            </div>
        </div> 
    </>
  )
}

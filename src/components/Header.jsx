import React, { useState } from 'react'
import MobileMenu from './MobileMenu'



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
    

    const scrolled = isScroll ? 'bg-white' : 'bg-black'
    const scrolledText = isScroll ? 'text-black' : 'text-white'
    const scrolledMenu = isScroll ? 'text-black' : 'text-[#eeeeee]'

    const [isClick, setIsClick] = useState(false)
    const onClickBtn = ()=>{
        setIsClick(!isClick);
    }
    // const onClose = ()=>{
    //     setIsClick(false);
    // }

  return (
    <>
        
        <div className={`w-full mobile:px-[20px] tablet:px-[50px] pc:px-[50px] widepc:px-[250px] border-b border-[#eeeeee] bg-black ${scrolled} fixed top-0 transition z-30`}>
            <div className='h-[80px] flex flex-row items-center justify-between'>
                <div className='w-[142px] h-[44px]'>
                    <img src={process.env.PUBLIC_URL+'assets/img/google.png'}  alt="img"/>
                </div>

                <div className='mobile:hidden tablet:hidden pc:block widepc:block'>
                    <ul className='flex flex-row text-[18px]'>
                        <li><a href="#!" className={`mr-[115px] ${scrolledText} transition`}>메시지</a></li>
                        <li><a href="#!" className={`mr-[115px]  ${scrolledText} transition`}>크레딧</a></li>
                        <li><a href="#!" className={` ${scrolledText} transition`}>고객센터</a></li>
                    </ul>
                </div>

                <div onClick={onClickBtn} className={`${scrolledMenu} mobile:block tablet:block pc:hidden widepc:hidden`}>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>

                
            </div>
        </div> 

        {isClick && <MobileMenu onClose={()=>setIsClick(false)} />}
    </>
  )
}

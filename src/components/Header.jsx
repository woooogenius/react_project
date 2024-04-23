import React, { useState } from 'react'



export default function Header() {

    const [isScroll, setIsScroll] = useState(false)
    const onScroll = ()=>{
        if(window.scrollY > 50){
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }
    }

    window.addEventListener('scroll', onScroll)
    

    const scrolled = isScroll ? 'bg-white' : 'bg-black'
    const scrolledText = isScroll ? 'text-black' : 'text-white'

  return (
    <>
        
        <div className={`w-full tablet:px-[50px] pc:px-[50px] widepc:px-[250px] border-b border-[#eeeeee] bg-black ${scrolled} fixed top-0 transition z-50`}>
            <div className='h-[80px] flex flex-row items-center justify-between'>
                <div className='w-[142px] h-[44px]'>
                    <img src={process.env.PUBLIC_URL+'assets/img/google.png'}  alt="img"/>
                </div>

                <div className='tablet:hidden pc:block widepc:block'>
                    <ul className='flex flex-row text-[18px]'>
                        <li><a href="#!" className={`mr-[115px] ${scrolledText} transition`}>메시지</a></li>
                        <li><a href="#!" className={`mr-[115px]  ${scrolledText} transition`}>크레딧</a></li>
                        <li><a href="#!" className={` ${scrolledText} transition`}>고객센터</a></li>
                    </ul>
                </div>

                
            </div>
        </div> 
    </>
  )
}

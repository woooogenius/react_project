import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'

export default function DashHeader() {

    // const [isScroll, setIsScroll] = useState(false)
    // const onScroll = ()=>{
    //     if(window.scrollY > 80){
    //         setIsScroll(true)
    //     }else{
    //         setIsScroll(false)
    //     }
    // }

    // window.addEventListener('scroll', onScroll)
    

    // const scrolled = isScroll ? 'bg-white' : 'bg-black'
    // const scrolledText = isScroll ? 'text-black' : 'text-white'
    // const scrolledMenu = isScroll ? 'text-black' : 'text-[#000000]'

    const [isClick, setIsClick] = useState(false)
    const onClickBtn = ()=>{
        setIsClick(!isClick);
    }

  return (
    <>
          <div className={`w-full mobile:px-[20px] tablet:px-[50px] pc:px-[50px] widepc:px-[250px] border-b border-[#eeeeee] bg-white fixed top-0 transition z-30`}>
            <div className='h-[80px] flex flex-row items-center justify-between'>

                <div className='flex items-center'>
                    <div onClick={onClickBtn} className={`text-black mobile:block tablet:block pc:block widepc:block mr-[10px]`}>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='w-[142px] h-[44px] flex items-center'>
                        
                        <img src={process.env.PUBLIC_URL+'assets/img/google.png'}  alt="img"/>
                    </div>
                </div>
                

                <div className='flex items-center'>
                    <ul className='flex flex-row text-[18px] mr-[100px]'>
                        <li><Link to={'/send'}><div className={`mr-[115px]  transition`}>메시지</div></Link></li>
                        <li><Link><div className={`mr-[115px]   transition`}>크레딧</div></Link></li>
                        <li><Link><div className={`transition`}>고객센터</div></Link></li>
                    </ul>
                    
                    <div className='flex items-center'>
                        <img src={process.env.PUBLIC_URL+'assets/img/alert.png'} alt="u=img" className='w-[27px] h-[27px] mr-[40px]' />
                        <img src={process.env.PUBLIC_URL+'assets/img/user.png'} className='rounded-[50%] w-[40px] h-[40px]' alt="img" />
                        <img src={process.env.PUBLIC_URL+'assets/img/down.png'} className='rounded-[50%] w-[20px] h-[20px] ml-[10px]' alt="img" />
                    </div>

                </div>

               

                
            </div>
        </div> 

        {isClick && <MobileMenu onClose={()=>setIsClick(false)} />}
    </>
  )
}

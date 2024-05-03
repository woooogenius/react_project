import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'

export default function JoinHeader() {


    const [isClick, setIsClick] = useState(false)
  

  return (
    <>
        <div className='w-full h-[80px] bg-white fixed top-0 left-1/2 transform -translate-x-1/2 transition z-30 border-b border-[#CECECE]'>
            <div className={`widepc:w-[1920px] h-full mobile:w-full pc:w-full tablet:w-full px-[50px] bg-white fixed top-0 left-1/2 transform -translate-x-1/2 transition z-30 `}>
                <div className='h-[80px] flex flex-row items-center justify-between'>

                    <div className='flex items-center'>
                        
                        <div className='w-[142px] h-[44px] flex items-center'>
                            
                            <img src={process.env.PUBLIC_URL+'assets/img/google.png'}  alt="img"/>
                        </div>
                    </div>
                    

                    <div className='flex items-center mobile:hidden tablet:hidden pc:flex'>
                        <ul className='flex flex-row text-[18px] mr-[100px]'>
                            <li><Link to={'/send'}><div className={`mr-[115px]  transition`}>메시지</div></Link></li>
                            <li><Link to={'/credit'}><div className={`mr-[115px]   transition`}>크레딧</div></Link></li>
                            <li><Link to={'/'}><div className={`transition`}>고객센터</div></Link></li>
                        </ul>
                        
                       

                    </div>

                

                    
                </div>
            </div> 

             {isClick && <MobileMenu onClose={()=>setIsClick(false)} />}
        </div>
          
    </>
  )
}

import React, { useEffect, useState } from 'react'
import DashHeader from '../components/DashHeader'
import SideMenu from '../components/SideMenu'
import { Link, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import MessagePage from './MessagePage'
import KakaoAlert from './KakaoAlert'
import KakaoFriend from './KakaoFriend'

export default function SendMessagePage() {

    const [isChecked, setIsChecked] = useState('send')

    const handleChecked = (value)=>{
        setIsChecked(value);
    }


    useEffect(()=>{
        setIsChecked('send')
    },[])

  return (
    <>
        <div className='w-full pt-[80px]'>

            <DashHeader/>
            <div className='w-[1920px] m-auto bg-[#F3F4F8]'>
                <div className='w-full flex '>
                    <SideMenu/>
                    <div className='w-full'>
                        <div className='px-[124px]'>
                            <h4 className='text-[28px] my-[30px] font-bold'>
                                { isChecked === 'send'? '메시지 전송':null}
                                { isChecked === 'kakao'? '카카오 알림톡':null}
                                { isChecked === 'friend'? '카카오 친구톡':null}
                            </h4>
                            
                            <ul className='flex'>
                                <li className='text-[18px] mr-[72px]'>
                                    <label className={`cursor-pointer pb-[10px] transition ${isChecked === 'send' ? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                        <input type="radio" name='submenu' value='send'  defaultChecked={isChecked === 'send'} onChange={()=>handleChecked('send')} hidden/>
                                        메시지 전송
                                    </label>
                                </li>
                                <li className='text-[18px] mr-[72px]'>
                                    <label className={`cursor-pointer pb-[10px] transition ${isChecked ==='kakao' ? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                        <input type="radio" name='submenu' value='kakao' defaultChecked={isChecked === 'kakao'} onChange={()=>handleChecked('kakao')} hidden/>
                                        카카오 알림톡
                                    </label>
                                </li>
                                <li className='text-[18px]'>
                                    <label className={`cursor-pointer pb-[10px] transition ${isChecked ==='friend'? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                        <input type="radio" name='submenu' value='friend' defaultChecked={isChecked==='friend'} onChange={()=>handleChecked('friend')} hidden/>
                                        카카오 친구톡
                                    </label>
                                </li>
                            </ul>

                        


                        </div>
                        <div className='w-full'>

                            {isChecked === 'send'? <MessagePage/> : null}
                            {isChecked === 'kakao'? <KakaoAlert/> : null}
                            {isChecked === 'friend'? <KakaoFriend/> : null}

                        </div>

                    </div>
                    
                    

                </div>
            </div>

        </div>
       
        
        
    </>
  )
}

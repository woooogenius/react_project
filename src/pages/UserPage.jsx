import React, { useEffect, useState } from 'react'
import DashHeader from '../components/DashHeader'
import SideMenu from '../components/SideMenu'
import MobileSideMenu from '../components/MobileSideMenu'
import UserInfoPage from './UserInfoPage'

export default function UserPage() {

    const [isChecked, setIsChecked] = useState('userinfo')

    const handleChecked = (value)=>{
        setIsChecked(value);
    }


   
   
  return (
    <>
        <div className='w-full pt-[80px]'>

            <DashHeader/>
            <div className='widepc:w-[1920px] mobile:w-full tablet:w-full pc:w-full m-auto bg-[#F3F4F8]'>
                <div className='w-full flex '>
                    <div className='pc:block widepc:block mobile:hidden tablet:hidden'>
                        <SideMenu/>
                    </div>
                    <div className='pc:hidden widepc:hidden mobile:hidden tablet:block'>
                        <MobileSideMenu/>
                    </div>
                    <div className='w-full'>
                        <div className='widepc:px-[124px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]'>
                            <h4 className='text-[28px] mobile:text-[22px] my-[30px] font-bold'>
                                마이페이지
                            </h4>
                            
                            <ul className='flex'>
                                <li className='text-[18px] mobile:text-[16px] mr-[72px] mobile:mr-[20px]'>
                                    <label htmlFor='sub01' className={`cursor-pointer pb-[10px] transition ${isChecked === 'userinfo' ? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                        <input type="radio" id='sub01' name='submenu' value='userinfo'  defaultChecked={isChecked === 'userinfo'}  onChange={()=>handleChecked('userinfo')} hidden/>
                                        회원정보
                                    </label>
                                </li>

                                <li className='text-[18px] mobile:text-[16px] mr-[72px] mobile:mr-[20px]'>
                                    <label htmlFor='sub02' className={`cursor-pointer pb-[10px] transition ${isChecked === 'changepw' ? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                        <input type="radio" id='sub02' name='submenu' value='changepw'  defaultChecked={isChecked === 'changepw'}  onChange={()=>handleChecked('changepw')} hidden/>
                                        비밀번호 변경
                                    </label>
                                </li>

                                <li className='text-[18px] mobile:text-[16px] mr-[72px] mobile:mr-[20px]'>
                                    <label htmlFor='sub03' className={`cursor-pointer pb-[10px] transition ${isChecked === 'business' ? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                        <input type="radio" id='sub03' name='submenu' value='business'  defaultChecked={isChecked === 'business'}  onChange={()=>handleChecked('business')} hidden/>
                                        기업프로필 추가
                                    </label>
                                </li>
                               
                            </ul>

                        


                        </div>
                        <div className='w-full'>

                            {isChecked === 'userinfo' ? <UserInfoPage/> : ''}
                            {isChecked === 'changepw' ? '비번변경' : ''}
                            {isChecked === 'business' ? '기업프로필' : ''}

                        </div>

                    </div>
                    
                    

                </div>
            </div>

        </div>
       
       
        
    </>
  )
}

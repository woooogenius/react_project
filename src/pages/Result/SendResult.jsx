import React, { useEffect, useState } from 'react'
import DashHeader from '../../components/DashHeader'
import SideMenu from '../../components/SideMenu'
import MobileSideMenu from '../../components/MobileSideMenu'
import ResultPage from './ResultPage'
import ResultKakao from './ResultKakao'

export default function SendResult() {

    const [isChecked, setIsChecked] = useState('result')

    const handleChecked = (value)=>{
        setIsChecked(value);
    }


    // useEffect(()=>{
    //     setIsChecked('result')
    // },[])
   
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
                                발송결과
                            </h4>
                            
                            <ul className='flex'>
                                <li className='text-[18px] mobile:text-[16px] mr-[72px] mobile:mr-[20px]'>
                                    <label htmlFor='sub01' className={`cursor-pointer pb-[10px] transition ${isChecked === 'result' ? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                        <input type="radio" id='sub01' name='submenu' value='result'  defaultChecked={isChecked === 'result'}  onChange={()=>handleChecked('result')} hidden/>
                                        발송결과
                                    </label>
                                </li>
                                <li className='text-[18px] mobile:text-[16px] mr-[72px] mobile:mr-[20px]'>
                                    <label htmlFor='sub02' className={`cursor-pointer pb-[10px] transition ${isChecked ==='kakao' ? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                        <input type="radio" id='sub02' name='submenu' value='kakao' defaultChecked={isChecked === 'kakao'} onChange={()=>handleChecked('kakao')} hidden/>
                                        카카오 
                                    </label>
                                </li>
                                
                            </ul>

                        


                        </div>
                        <div className='w-full'>

                            {isChecked === 'result' ? <ResultPage/> : ''}
                            {isChecked === 'kakao' ? <ResultKakao/> : ''}

                        </div>

                    </div>
                    
                    

                </div>
            </div>

        </div>
       
        
        
    </>
  )
}

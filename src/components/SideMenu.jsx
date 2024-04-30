import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function SideMenu() {

    const [isChecked, setIsChecked] = useState('')

    const location = useLocation()

    useEffect(()=>{
        setIsChecked(location.pathname.replace('/',''))
        //슬래시를 제거한 값을 isChecked에 넣는다
    },[location])
   

   
   

  return (
    <>
        <div className='w-[240px] h-[calc(100vh-80px)] px-[24px] py-[65px] bg-[#162850] text-white rounded-tr-[30px]'>

            <div className='border-b border-gray-600 pb-[50px]'>
                <h4 className='mb-[30px] text-[20px]'>userId</h4>

                <div>
                    <ul>
                        <li className='flex justify-between mb-[20px]'>
                            <p className='text-[#D7E0F4]'>보유 크레딧</p>
                            <p>120,000</p>
                        </li>

                        <li className='flex justify-between mb-[20px]'>
                            <p className='text-[#D7E0F4]'>주소록 그룹</p>
                            <p>23 그룹</p>
                        </li>

                        <li className='flex justify-between'>
                            <p className='text-[#D7E0F4]'>등록 발신 번호</p>
                            <p>3개</p>
                        </li>
                    </ul>
                </div>



            </div>


            <div className='mt-[30px]'>
                <ul>

                    <li className=''>
                        <Link to='/send' className={`flex cursor-pointer text-white items-center transition w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'send' ? 'bg-button_color' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>

                                <p className='ml-[15px]'>메시지 전송</p>
                        </Link>
                          
                           
                    </li>
                    

                    <li className=''>
                        <Link to='/result' className={`flex cursor-pointer text-white transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'result' ? 'bg-button_color' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                                </svg>
                                <p className='ml-[15px]'>발송 결과</p>
                        </Link>
                           
                            
                        
                    </li>

                    <li className=''>
                        <Link to='/credit' className={`flex cursor-pointer text-white transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'credit' ? 'bg-button_color' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <p className='ml-[15px]'>크레딧</p>
                        </Link>
                           
                            
                        
                    </li>

                    <li className=''>
                        <Link to='/template' className={`flex cursor-pointer text-white transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'template' ? 'bg-button_color' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                            <p className='ml-[15px]'>템플릿 관리</p>
                        </Link>
                           
                            
                        
                    </li>

                    <li className=''>
                        <Link to='/result' className={`flex cursor-pointer text-white transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'num' ? 'bg-button_color' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                            <p className='ml-[15px]'>발신번호 관리</p>
                        </Link>
                           
                            
                        
                    </li>

                    <li className=''>
                        <Link to='/result' className={`flex cursor-pointer text-white transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'address' ? 'bg-button_color' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <p className='ml-[15px]'>주소록 관리</p>
                        </Link>
                           
                            
                        
                    </li>

                   
                   

                </ul>
            </div>

        </div>
    </>
  )
}

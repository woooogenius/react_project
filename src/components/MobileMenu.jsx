import React, { useState } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function MobileMenu({onClose}) {
    const handleClose = ()=>{
        onClose()
    }

    const [isChecked, setIsChecked] = useState('')

    const handleChecked = (value) =>{
        setIsChecked(value)
    }
    

    const navigate = useNavigate();
    const handleClick = (value)=>{
        if(value === 'send'){
            navigate('/send')
        }else if(value === 'result'){
            navigate('/')
        }
    }
  return (
    <>
        <motion.div initial={{ opacity:0 }} whileInView={{opacity: 1,transition: {duration:0.5} }}  className='fixed top-0 left-0 z-50'>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50"></div>
            <div className="fixed top-0 z-50">
                <div className="w-full relative">
                    <motion.div initial={{ x: -70, opacity:0 }} whileInView={{opacity: 1, x:0,transition: {duration:0.5} }} className='bg-[#162850] text-white w-[250px] h-screen px-5 py-6 absolute left-0 top-0 z-50'>
                        <div onClick={handleClose} className="mb-[50px] text-[26px]">X</div>
                        {/* <div>
                                
                            <img src={process.env.PUBLIC_URL+'assets/img/google.png'} alt="img" />

                        </div>    */}

                        <div className='border-b border-[#D7E0F4] pb-[30px]'>
                            <p className='text-[20px] mb-[20px]'>userId</p>
                            <ul>
                                <li className='flex justify-between'>
                                    <p className='text-[#D7E0F4]'>보유 크레딧</p>
                                    <p>120,000</p>
                                </li>

                                <li className='flex justify-between mt-[15px]'>
                                    <p className='text-[#D7E0F4]'>주소록 그룹</p>
                                    <p>23 그룹</p>
                                </li>

                                <li className='flex justify-between mt-[15px]'>
                                    <p className='text-[#D7E0F4]'>등록 발신 번호</p>
                                    <p>3개</p>
                                </li>
                            </ul>
                        </div>      

                         {/* <div className='py-6 mt-[50px]'>
                                
                             <a className="block px-3 py-4 rounded-[25px] text-center mb-5 cursor-pointer transition delay-75 bg-button_color text-[#eeeeee]">메시지전송</a>
                             <a className="block px-3 py-4 rounded-[25px] text-center mb-5 cursor-pointer transition delay-75 bg-button_color  text-[#eeeeee]">크레딧</a>
                             <a className="block px-3 py-4 rounded-[25px] text-center mb-5 cursor-pointer transition delay-75 bg-button_color  text-[#eeeeee]">고객센터</a>
                                    

                        </div>  */}

                        <div className='mt-[30px]'>
                            <ul>

                                <li className=''>
                                    
                                        <label onClick={()=>handleClick('send')} className={`flex cursor-pointer items-center transition w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'send' ? 'bg-button_color' : ''}`}>
                                            <input type="radio" name='sidemenu' value='send' defaultChecked={isChecked === 'send'} onChange={()=>handleChecked('send')} hidden/>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                            </svg>

                                            <p className='ml-[15px]'>메시지 전송</p>
                                        </label>
                                    
                                </li>
                                

                                <li className=''>
                                    
                                        <label  onClick={()=>handleClick('result')} className={`flex cursor-pointer transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'result' ? 'bg-button_color' : ''}`}>
                                            <input type="radio" name='sidemenu' value='result' defaultChecked={isChecked === 'result'} onChange={()=>handleChecked('result')} hidden/>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                                            </svg>
                                            <p className='ml-[15px]'>발송 결과</p>
                                        </label>
                                        
                                    
                                </li>

                                <li className=''>
                                        <label className={`flex cursor-pointer transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'credit' ? 'bg-button_color' : ''}`}>
                                            <input type="radio" name='sidemenu' value='credit' defaultChecked={isChecked === 'credit'} onChange={()=>handleChecked('credit')} hidden/>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                                            </svg>
                                            <p className='ml-[15px]'>크레딧</p>
                                            
                                        </label>
                                    
                                </li>

                                <li className=''>
                                        <label className={`flex cursor-pointer transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'template' ? 'bg-button_color' : ''}`}>
                                            <input type="radio" name='sidemenu' value='template' defaultChecked={isChecked === 'template'} onChange={()=>handleChecked('template')} hidden/>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
                                                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                                            </svg>
                                            <p className='ml-[15px]'>템플릿 관리</p>

                                        </label>
                                    
                                </li>

                                <li className=''>
                                        <label className={`flex cursor-pointer transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'number' ? 'bg-button_color' : ''}`}>
                                            <input type="radio" name='sidemenu' value='number' defaultChecked={isChecked === 'number'} onChange={()=>handleChecked('number')} hidden/>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                            </svg>
                                            <p className='ml-[15px]'>발신번호 관리</p>

                                        </label>
                                    
                                </li>

                                <li className=''>
                                        <label className={`flex cursor-pointer transition items-center w-[192px] h-[52px] p-[10px]  mb-[17px] rounded-[8px] ${isChecked === 'address' ? 'bg-button_color' : ''}`}>
                                            <input type="radio" name='sidemenu' value='address' defaultChecked={isChecked === 'address'} onChange={()=>handleChecked('address')} hidden/>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                            </svg>
                                            <p className='ml-[15px]'>주소록 관리</p>

                                        </label>
                                    
                                </li>

                            </ul>
                        </div>

                    </motion.div>
                </div>
            
            </div>
        </motion.div>
    </>
  )
}

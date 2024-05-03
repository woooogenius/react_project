import React, { useEffect, useState } from 'react'
import DelAccountModal from '../components/DelAccountModal'

export default function ChangePasswd() {

    
    const [nowPasswd, setNowPasswd] = useState('')
    const onChangePasswd = (e)=>{
        setNowPasswd(e.target.value)
    }

    const [newPasswd, setNewPasswd] = useState('')
    const onChangeNewPasswd = (e)=>{
        setNewPasswd(e.target.value)
    }
    const [confirmPasswd, setConfirmPasswd] = useState('')
    const onChangeConfirmPasswd = (e)=>{
        setConfirmPasswd(e.target.value)
    }

    
    



  

    

  return (
    <>
    <div className='w-full mt-[10px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]  widepc:pr-[120px] bg-white pb-[150px] min-h-[calc(100vh-220px)]'>
        <div className='flex flex-wrap'>
            

            <div className='w-full flex'>
                <div className='pc:w-[50%] widepc:w-[40%] tablet:w-full mobile:w-full'>

                    
                        <div>
                            <div className='text-[16px] text-[#525252] mt-[40px] mobile:text-[14px]'>
                                <p>- 나의 회원정보를 수정할 수 있습니다</p>
                                <p>- 개인회원에서 기업회원으로 전환이 가능합니다</p>
                            </div>


                            <div className='mt-[56px]'>

                                

                                <h4 className='text-[18px] mt-[50px]'>현재 비밀번호</h4>
                                <div className=' mt-[10px]'>
                                    <input type="text" onChange={onChangePasswd} placeholder='현재 비밀번호' className={`${nowPasswd.length > 0 ? 'bg-[#F2F5F9]' : ''} w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`}/>
                                </div>
                                

                                    
                                <div>
                                    <h4 className='text-[18px] mt-[50px]'>새 비밀번호</h4>
                                    <div className=' mt-[10px]'>
                                        <input type="text" onChange={onChangeNewPasswd} placeholder='8자 이상, 영문 혹은 영문과 숫자 조합' className={`${newPasswd.length > 0 ? 'bg-[#F2F5F9]' : ''} w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`}/>
                                    </div> 
                                </div>

                                <div>
                                    <h4 className='text-[18px] mt-[50px]'>새 비밀번호 확인</h4>
                                    <div className=' mt-[10px]'>
                                        <input type="text" onChange={onChangeConfirmPasswd} placeholder='8자 이상, 영문 혹은 영문과 숫자 조합' className={`${confirmPasswd.length > 0 ? 'bg-[#F2F5F9]' : ''} w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`}/>
                                    </div> 
                                </div>

                                

                                <button  className='w-full bg-[#4F44F0] text-white h-[55px] rounded-[8px] mt-[80px]'>확인</button>

                            </div>
                        </div> 
                       
                   
                    

                </div>
                


                <div className='pc:w-[60%] tablet:hidden mobile:hidden'>

                </div>

              




            </div>

           



        


        </div>
        
    </div>

    

   
    </>
  )
}

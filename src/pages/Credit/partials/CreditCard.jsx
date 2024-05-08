import React, { useState } from 'react'
import CreditModal from '../../../components/Modal/CreditModal'

export default function CreditCard({amount}) {

    const [isClick, setIsClick] = useState(false)
    
    const onClickPop = ()=>{
        setIsClick(!isClick)
    }

  return (
    <>
        <div className='widepc:w-[273px] mobile:w-full pc:w-[calc(33.3333%-60px)] tablet:w-[calc(50%-15px)] widepc:mr-18px  widepc:mt-0 h-[367px] border border-[#E5E5E5] rounded-[8px] p-[20px] shadow-lg '>
            <p className='text-[24px] font-bold'>{amount}원</p>
            <p className='text-[15px] text-[#7B7B7B] mt-[10px]'>총 66,666건 발송 가능<br/>1건당 15원에 결제가능합니다</p>

            <div className='mt-[16px] flex justify-between'>
                <p className='text-[19px] font-semibold'>330,000 크레딧</p>
                <p className='px-[10px] py-[7px] text-[#2116BF] text-[14px] bg-[#E0EDFF] rounded-[16px]'>+ 10%</p>
            </div>
                        
            <div className='mt-[20px] bg-[#F4F5F6] rounded-[8px] p-[16px]'>
                <div className='flex justify-between mb-[15px]'>
                    <p className='text-[#6E6E6E] text-[15px]'>기본 크레딧</p>
                     <p className='text-[#070707] text-[15px]'>300,000</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-[#6E6E6E] text-[15px]'>추가 크레딧</p>
                    <p className='text-[#070707] text-[15px]'>+30,000</p>
                </div>
            </div>

            <button onClick={onClickPop} className='w-full h-[56px] bg-[#5146F0] text-white rounded-[8px] mt-[16px]'>구매하기</button>
        </div>

        {
            isClick ? <CreditModal amount={amount} onClose={() => setIsClick(false)}/> : null
        }

        
    </>
  )
}

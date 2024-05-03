import React, { useEffect, useState } from 'react'
import AddNumber from '../components/AddNumber'
import Phone from '../components/Phone'
import SendOption from '../components/SendOption'
import CreditCard from '../components/CreditCard'
import CreditModal from '../components/CreditModal'

export default function BuyCredit() {

   
   

  return (
    <div className='w-full mt-[10px] pc:pl-[124px] mobile:px-[20px] tablet:px-[30px] bg-white pb-[150px]   min-h-[calc(100vh-220px)]'>

            <div className='w-full pt-[30px]'>
                <div className='text-[16px] text-[#525252]   mobile:text-[14px]'>
                    <p>- 메시지 전송 시 사용하는 크레딧을 구매할 수 있습니다.</p>
                    <p>- 크레딧 상품 별 추가 크레딧을 제공합니다.</p>
                </div>


                <div className='mt-[56px] w-full flex widepc:justify-between mobile:flex-wrap gap-[30px] tablet:justify-normal  pc:justify-normal tablet:gap-[30px] pc:gap-[30px] tablet:flex-wrap pc:flex-wrap widepc:flex-nowrap'>
                    
                    <CreditCard amount={'30,000'}/>
                    <CreditCard amount={'50,000'}/>
                    <CreditCard amount={'70,000'}/>
                    <CreditCard amount={'90,000'}/>
                    <CreditCard amount={'120,000'}/>


                </div>




                
               




            </div>



        


        
    </div>
  )
}

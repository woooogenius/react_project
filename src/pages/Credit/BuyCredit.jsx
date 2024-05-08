import React from 'react'
import CreditCard from './partials/CreditCard'
import PageDesc from '../../components/PageDesc'

export default function BuyCredit() {

   
   

  return (
    <div className='w-full mt-[10px] pc:pl-[124px] mobile:px-[20px] tablet:px-[30px] bg-white pb-[150px]  min-h-[calc(100vh-220px)]'>

      <div className='w-full '>
        
        <PageDesc desc01={'- 메시지 전송 시 사용하는 크레딧을 구매할 수 있습니다.'} desc02={'- 크레딧 상품 별 추가 크레딧을 제공합니다.'}/>


        <div className='mt-[56px] w-full flex mobile:flex-wrap gap-[30px] tablet:justify-normal  pc:justify-normal tablet:gap-[30px] pc:gap-[30px] widepc:gap-[18px] tablet:flex-wrap pc:flex-wrap widepc:flex-nowrap'>
                    
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

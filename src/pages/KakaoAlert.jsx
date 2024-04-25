import React from 'react'
import AddNumber from '../components/AddNumber'
import Phone from '../components/Phone'

export default function KakaoAlert() {
  return (
    <>
      <div className='w-full mt-[10px] pl-[124px] bg-white pb-[150px]'>
        <div className='flex flex-wrap'>
          
          <div className='w-1/2'>
            <div className='text-[16px] text-[#525252] mt-[40px]'>
                <p>- 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수 있습니다.</p>
                <p>- 90byte 초과 시 장문 문자로 자동 전환되며, 최대 2000byte까지 작성 가능합니다.</p>
            </div>
            <AddNumber/>

            <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>
            
          </div>

          <div className='w-1/2'>
          </div>

        </div>

      </div>
    </>
  )
}

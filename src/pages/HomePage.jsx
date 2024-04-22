import React from 'react'
import Header from '../components/Header'

export default function HomePage() {

  return (
    <>

        <div className='w-full h-screen bg-black px-[250px] pt-[80px] text-white flex'>

            <div className='w-1/2 h-full border-r border-gray-300'>
              <div className='w-full h-full flex flex-col justify-center'>
                <p className='text-[21px] mb-[10px]'>인터넷 문자 메시지 전송의 모든것</p>

                <div className='text-[55px] tracking-[5px] font-bold'>
                    <p className='bg-gradient-to-r from-text-gradient-from to-text-gradient-to inline-block bg-clip-text text-transparent'>가장 빠르고 안정적인</p>
                    <p className='bg-gradient-to-r from-text-gradient-from to-text-gradient-to inline-block bg-clip-text text-transparent'>문자 서비스 SEDNGO</p>
                </div>





                <button className='w-[219px] h-[65px] mt-[68px] bg-button_color rounded-[44px] text-[21px]'>메시지 전송하기</button>
              </div>
            </div>

            <div className='w-1/2'>

            </div>

        </div>

    </>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='bg-[#222222] border-b border-[#333333]'>
            <div className='px-[250px] mobile:px-[20px] tablet:px-[50px] pc:px-[50px] py-[38px]'>
                <div className='flex justify-between items-center'> 
                
                    <div className='w-[152px]  flex justify-center'>
                        <img className='w-full ' src={process.env.PUBLIC_URL+'assets/img/google.png'} alt="img" />
                    </div>
                    <div className='mobile:hidden tablet:block'>
                        <ul className='flex'>
                            <li><a href="#!" className='text-[#EEEEEE] mr-[72px] text-[18px]'>메시지</a></li>
                            <li><a href="#!" className='text-[#EEEEEE] mr-[72px] text-[18px]'>크레딧</a></li>
                            <li><a href="#!" className='text-[#EEEEEE] text-[18px]'>고객센터</a></li>
                        </ul>
                    </div>
                    

                </div>
            </div>
           
        </div> 

        <div className='bg-[#222222] text-[#eeeeee]'>
            <div className='px-[250px] mobile:px-[20px] tablet:px-[50px] pc:px-[50px] pt-[38px] pb-[88px]'>
                <p>location. 부산광역시 부산진구 중앙대로 623 3층 - 4층</p>
                <div className='flex mt-[20px]'>
                    <p className='mr-[60px]'>P. 1833.5770</p>
                    <p>E-mail. amuz@amuz.co.kr</p>
                </div>
            </div>
           
        </div> 
  

    </>
  )
}

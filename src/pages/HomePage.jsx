import React from 'react'

export default function HomePage() {

  return (
    <>

        <div className='w-full h-screen bg-black px-[250px] pt-[80px] text-white flex overflow-hidden'>

            <div className='w-1/2 h-full'>
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
              <div className='w-full flex'>
                
                <div className='w-4/12 flex flex-col mt-[140px] mr-[32px]'>
                  <div className='w-[254px] h-[443px] bg-button_color rounded-[20px] mb-[24px]'></div>
                  <div className='w-[254px] h-[388px] bg-dark-gray  rounded-[20px]'></div>
                </div>

                <div className='w-4/12 flex flex-col mr-[32px]'>
                  <div className='w-[254px] h-[524px] bg-dark-gray-3 rounded-[20px] mb-[24px]'></div>
                  <div className='w-[254px] h-[497px] bg-button_color rounded-[20px]'></div>
                </div>

                <div className='w-4/12  flex flex-col '>
                  <div className='w-[254px] h-[304px] bg-button_color rounded-bl-[20px] rounded-br-[20px] mb-[24px]'></div>
                  <div className='w-[254px] h-[554px] bg-dark-gray rounded-[20px]'></div>
                </div>

              </div>
            </div>

        </div>
        {/* page1 end */}

        <div className='px-[250px] pb-[200px]'>

          <div className='w-[64px] h-[64px] m-auto mt-[150px]'>
            <img src={process.env.PUBLIC_URL+'assets/img/message.png'} alt="img"/>
          </div>

          <div className='flex flex-col items-center justify-center mt-[50px]'>
            <p className='text-[56px] font-bold'>복잡한 인터넷 문자 서비스를</p>
            <p className='text-[56px] font-bold'>간편하게 만나보세요</p>
            <p className='mt-[24px] text-[26px] text-text-gray'>모든 종류의 인터넷 SMS를 편리하게</p>
            
          </div>

          <div className='mt-[96px] flex justify-center'>

            <div className='w-[444px] h-[349px] bg-box-light-violet rounded-[20px] mr-[44px] flex flex-col justify-center items-center'>

              <div className='w-[64px] h-[64px]'>
                <img src={process.env.PUBLIC_URL+'assets/img/write.png'} alt="img" />
              </div>

              <p className='mt-[24px] text-center text-[26px] font-semibold'>메세지 용량에<br/>제한 받지 않고 전송</p>
              <p className='mt-[20px] text-center text-[20px] text-text-gray-2'>메시지 옹량 걱정없이 단문 메시지는<br/>물론 장문, 사진까지 전송이 가능합니다.</p>

            </div>

            <div className='w-[444px] h-[349px] bg-box-light-violet rounded-[20px] mr-[44px] flex flex-col justify-center items-center'>

              <div className='w-[64px] h-[64px]'>
                <img src={process.env.PUBLIC_URL+'assets/img/mail.png'} alt="img" />
              </div>

              <p className='mt-[24px] text-center text-[26px] font-semibold'>메세지 용량에<br/>제한 받지 않고 전송</p>
              <p className='mt-[20px] text-center text-[20px] text-text-gray-2'>메시지 옹량 걱정없이 단문 메시지는<br/>물론 장문, 사진까지 전송이 가능합니다.</p>

            </div>

            <div className='w-[444px] h-[349px] bg-box-light-violet rounded-[20px] mr-[44px] flex flex-col justify-center items-center'>

              <div className='w-[64px] h-[64px]'>
                <img src={process.env.PUBLIC_URL+'assets/img/notice.png'} alt="img" />
              </div>

              <p className='mt-[24px] text-center text-[26px] font-semibold'>메세지 용량에<br/>제한 받지 않고 전송</p>
              <p className='mt-[20px] text-center text-[20px] text-text-gray-2'>메시지 옹량 걱정없이 단문 메시지는<br/>물론 장문, 사진까지 전송이 가능합니다.</p>

            </div>

          </div>

        </div>
        {/* page2 end */}

        <div className='px-[250px] pb-[200px]'>

          <div className='w-[80px] h-[80px] m-auto mt-[150px]'>
            <img src={process.env.PUBLIC_URL+'assets/img/light.png'} alt="img"/>
          </div>

          <div className='flex flex-col justify-center items-center text-center mt-[50px]'>
            <p className='text-[54px] font-semibold'>샌드고의 다양한<br/>기능들을 살펴보세요</p>
            <p className='text-[26px] text-text-gray-2 mt-[24px]'>고객님들의 입장에서 고민하였습니다</p>
          </div>

          <div>
            
            <div className='flex flex-row justify-center mt-[96px]'>
              
              <div className='w-[626px] h-[597px] bg-box-gray-light rounded-[25px] mr-[54px] overflow-hidden'>
                <div className='pl-[54px] pt-[72px]'>
                  <p className='text-[34px] font-semibold'>자주 전송하는 내용이 있나요?</p>
                  <p className='text-[34px] font-semibold text-text-gray-medium'>템플릿으로 메시지 내용을<br/>저장하여 간편하게 전송하세요</p>
                  <div >
                    <img className='w-[798px] h-[427px] mt-[66px]' src={process.env.PUBLIC_URL+'assets/img/screen.png'} alt="img" />
                  </div>
                </div>  
              </div>

              <div className='w-[750px] h-[597px] bg-box-light-violet rounded-[25px] overflow-hidden'>
                <div className='px-[55px] pt-[72px]'>
                    <p className='text-[34px] font-semibold bg-gradient-to-l from-text-gra-1 to-text-gra-2 inline-block bg-clip-text text-transparent'>크레딧 구매시, 보너스 크레딧 증정</p>
                    <p className='text-[34px] font-semibold text-text-blue-deep'>크레딧 상품을 구매하면 상품별<br/>보너스 크레딧을 증정합니다</p>
                    <div >
                      <img className='w-[644px] mt-[66px]' src={process.env.PUBLIC_URL+'assets/img/screen.png'} alt="img" />
                    </div>
                </div>  
              </div>

            </div>

            <div className='flex flex-row justify-center mt-[40px]'>
              <div className='w-[855px] h-[720px] bg-box-blue-light rounded-[25px] mr-[54px] overflow-hidden'>
                <div className='pl-[54px] pt-[72px]'>
                    <p className='text-[34px] font-semibold text-text-blue-deep2'>전송 후 바로 발송확인 가능</p>
                    <p className='text-[34px] font-semibold text-text-blue-light2'>메세지 전송 후 바로 발송현황 창에서<br/>현재 메시지 전송 현황을 알려드립니다</p>
                    <div >
                      <img className='w-[800px] h-[440px] mt-[66px] rounded-[10px]' src={process.env.PUBLIC_URL+'assets/img/dashboard2.png'} alt="img" />
                    </div>
                  </div>  
              </div>

              <div className='w-[520px] h-[720px] bg-box-yellow-light rounded-[25px] relative'>
                <div className='px-[55px] pt-[72px] overflow-hidden'>
                      <p className='text-[34px] font-semibold text-text-brown'>누르면 바로 전송완료</p>
                      <p className='text-[34px] font-semibold text-text-gray-2'>누르자마자 수신인에게<br/>바로 전달됩니다</p>
                      <div className='absolute w-[450px] mt-[66px] bottom-0 left-1/2 transform -translate-x-1/2'>
                        <img className='' src={process.env.PUBLIC_URL+'assets/img/screen.png'} alt="img" />
                        <button className='w-[298px] h-[67px] bg-button_color rounded-[20px] text-[24px] text-white absolute bottom-[20px] left-1/2 transform -translate-x-1/2'>전송하기</button>
                      </div>
                </div> 
              </div>

            </div>

          </div>

        </div>
        {/* page3 end */}


    </>
  )
}

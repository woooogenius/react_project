import React, { useRef, useState } from 'react'
import Footer from '../components/Footer'
import { motion } from "framer-motion";
import Header from '../components/Header';
import { Link } from 'react-router-dom'
export default function HomePage() {


  return (
    <>
          <Header/>
          <div className='w-full bg-black overflow-hidden'>
            <div className='widepc:w-[1920px] mobile:w-full mobile:px-[20px] pc:w-[1280px] pc:px-[50px] tablet:px-[50px] widepc:px-[250px] pt-[80px] h-[1076px] m-auto bg-black flex  text-white '>
                

                <div className='widepc:w-1/2 pc:w-5/12 h-full mobile:w-full tablet:w-full'>
                  <div className='w-full h-full flex flex-col justify-center mobile:items-center mobile:text-center tablet:items-center tablet:text-center'>
                    <motion.p initial={{ y: -70, opacity:0 }} whileInView={{opacity: 1, y:0,transition: {when: "beforeChildren", staggerChildren: 0.5, duration:0.7} }} className='text-[18px] mb-[10px]'>인터넷 문자 메시지 전송의 모든것</motion.p>

                    <motion.div initial={{ y: -50, opacity:0 }} whileInView={{opacity: 1, y:0,transition: {when: "beforeChildren", staggerChildren: 0.5, duration:0.7} }} className='text-[45px] mobile:text-[40px] tracking-[5px] flex flex-col font-bold'>
                        <p className='bg-gradient-to-r from-text-gradient-from to-text-gradient-to inline-block bg-clip-text text-transparent'>가장 빠르고 안정적인</p>
                        <p className='bg-gradient-to-r from-text-gradient-from to-text-gradient-to inline-block bg-clip-text text-transparent'>문자 서비스 SEDNGO</p>
                    </motion.div>

                    <motion.button initial={{ scale:1 }} whileHover={{scale:1.1,transition: {duration:0.7} }} className='w-[219px] pc:w-[180px] pc:h-[55px] pc:text-[18px] h-[65px] mt-[68px] bg-button_color rounded-[44px] text-[21px]'><Link to='/send' className='text-white'>메세지 전송하기</Link></motion.button>
                  </div>
                </div>

                <div className='widepc:w-1/2 pc:w-7/12 relative mobile:hidden tablet:hidden pc:block'>
                  <div className='w-full flex'>
                    
                    <div className='w-4/12 flex flex-col mt-[140px] absolute bottom-0 left-0'>
                      <div className='widepc:w-[254px] pc:w-[220px] h-[443px] bg-button_color rounded-[20px] mb-[24px]'></div>
                      <div className='widepc:w-[254px] pc:w-[220px] h-[388px] bg-dark-gray  rounded-[20px]'></div>
                    </div>

                    <div className='w-4/12 flex flex-col  absolute widepc:left-[286px] pc:left-[250px] bottom-0'>
                      <div className='widepc:w-[254px] pc:w-[220px] h-[524px] bg-dark-gray-3 rounded-[20px] mb-[24px]'></div>
                      <div className='widepc:w-[254px] pc:w-[220px] h-[497px] bg-button_color rounded-[20px]'></div>
                    </div>

                    <div className='w-4/12  flex flex-col absolute top-0 pc:left-[500px] widepc:left-[572px]'>
                      <div className='widepc:w-[254px] pc:w-[220px] h-[304px] bg-button_color rounded-bl-[20px] rounded-br-[20px] mb-[24px]'></div>
                      <div className='widepc:w-[254px] pc:w-[220px] h-[554px] bg-dark-gray rounded-[20px]'></div>
                    </div>

                  </div>
                </div>
            </div>
          </div>

         

        {/* page1 end */}

        <div>

          <div className='widepc:px-[250px] mobile:px-[20px] pc:px-[50px] tablet:px-[50px] pb-[200px]'>

              <div className='w-[64px] h-[64px] m-auto mt-[150px]'>
                <img src={process.env.PUBLIC_URL+'assets/img/message.png'} alt="img"/>
              </div>

              <div className='flex flex-col items-center justify-center mt-[50px]'>
                <p className='widepc:text-[56px] mobile:text-[30px] tablet:text-[38px] pc:text-[45px] font-bold'>복잡한 인터넷 문자 서비스를</p>
                <p className='widepc:text-[56px] mobile:text-[30px] tablet:text-[38px] pc:text-[45px] font-bold'>간편하게 만나보세요</p>
                <p className='mt-[24px] tablet:text-[18px] pc:text-[20px] widepc:text-[26px] text-text-gray'>모든 종류의 인터넷 SMS를 편리하게</p>
                
              </div>

              <div className='mt-[96px] flex justify-center mobile:flex-wrap tablet:flex-wrap pc:flex-nowrap'>

                <motion.div initial={{ scale: 0}} whileInView={{scale: 1, transition: {when: "beforeChildren", staggerChildren: 0.5, duration:0.7} }} className='w-[444px] h-[349px] mobile:w-full tablet:w-full  bg-box-light-violet rounded-[20px] tablet:mr-0 mobile:mb-[20px] tablet:mb-[20px] pc:mr-[44px] flex flex-col justify-center items-center'>

                  <div className='w-[64px] h-[64px]'>
                    <img src={process.env.PUBLIC_URL+'assets/img/write.png'} alt="img" />
                  </div>

                  <p  className='mt-[24px] text-center text-[26px] pc:text-[22px] font-semibold'>메세지 용량에<br/>제한 받지 않고 전송</p>
                  <p className='mt-[20px] text-center text-[20px] pc:text-[16px] text-text-gray-2'>메시지 옹량 걱정없이 단문 메시지는<br/>물론 장문, 사진까지 전송이 가능합니다.</p>

                </motion.div>

                <motion.div initial={{ scale: 0 }} whileInView={{scale: 1 ,transition: {when: "beforeChildren", staggerChildren: 0.5,duration:0.7} }} className='w-[444px] h-[349px] mobile:w-full tablet:w-full  bg-box-light-violet rounded-[20px] tablet:mr-0 mobile:mb-[20px] tablet:mb-[20px] pc:mr-[44px] flex flex-col justify-center items-center'>

                  <div className='w-[64px] h-[64px]'>
                    <img src={process.env.PUBLIC_URL+'assets/img/mail.png'} alt="img" />
                  </div>

                  <p className='mt-[24px] text-center text-[26px] pc:text-[22px] font-semibold'>모든 종류의<br/>문자 메시지를 한번에</p>
                  <p className='mt-[20px] text-center text-[20px] pc:text-[16px] text-text-gray-2'>메시지 옹량 걱정없이 단문 메시지는<br/>물론 장문, 사진까지 전송이 가능합니다.</p>

                </motion.div>

                <motion.div initial={{ scale: 0 }} whileInView={{scale: 1 ,transition: {when: "beforeChildren", staggerChildren: 0.5,duration:0.7} }} className='w-[444px] h-[349px] mobile:w-full tablet:w-full  bg-box-light-violet rounded-[20px]  flex flex-col justify-center items-center'>

                  <div className='w-[64px] h-[64px]'>
                    <img src={process.env.PUBLIC_URL+'assets/img/notice.png'} alt="img" />
                  </div>

                  <p className='mt-[24px] text-center text-[26px] pc:text-[22px] font-semibold'>간편한 광고<br/>문자 메시지 설정</p>
                  <p className='mt-[20px] text-center text-[20px] pc:text-[16px] text-text-gray-2'>광고 설정 버튼 클릭 한번으로<br/>080 수신 거부 번호가 적용됩니다.</p>

                </motion.div>

              </div>

            </div>
        </div>

          {/* page2 end */}
          
          <div>
           <div className='px-[250px] mobile:px-[20px] tablet:px-[50px] pc:px-[50px] pb-[150px]'>

            <div className='w-[80px] h-[80px] m-auto mt-[150px]'>
              <img src={process.env.PUBLIC_URL+'assets/img/light.png'} alt="img"/>
            </div>

            <div className='flex flex-col justify-center items-center text-center mt-[50px]'>
              <p className='text-[54px] pc:text-[45px] mobile:text-[30px] tablet:text-[38px] font-semibold'>샌드고의 다양한<br/>기능들을 살펴보세요</p>
              <p className='text-[26px] pc:text-[20px] mobile:text-[18px] tablet:text-[18px] text-text-gray-2 mt-[24px]'>고객님들의 입장에서 고민하였습니다</p>
            </div>

            <div>
              
              <div className='flex flex-row justify-center mt-[96px] mobile:flex-wrap tablet:flex-wrap pc:flex-nowrap'>
                
                <motion.div initial={{ opacity:0, y:20 }} whileInView={{opacity: 1, y:0,transition: {when: "beforeChildren", staggerChildren: 0.3,duration:0.7} }} className='pc:w-[626px] mobile:w-full mobile:h-[250px] tablet:mr-0 tablet:mt-[40px] tablet:w-full tablet:h-[500px] pc:h-[597px] bg-box-gray-light rounded-[25px] pc:mr-[54px] overflow-hidden tablet:relative'>
                  <div className='px-[54px] pt-[72px]'>
                    <p className='text-[34px] tablet:text-[28px] mobile:text-[24px] font-semibold'>자주 전송하는 내용이 있나요?</p>
                    <p className='text-[34px] tablet:text-[28px] mobile:text-[22px] font-semibold text-text-gray-medium'>템플릿으로 메시지 내용을<br/>저장하여 간편하게 전송하세요</p>
                    <div className='mobile:hidden tablet:block '>
                      <img className=' pc:w-[798px] pc:h-[427px] tablet:w-[450px] tablet:h-[250px] tablet:ml-[120px] pc:ml-0  mt-[66px]' src={process.env.PUBLIC_URL+'assets/img/screen.png'} alt="img" />
                    </div>
                  </div>  
                </motion.div>

                <motion.div initial={{ opacity:0, y:20 }} whileInView={{opacity: 1, y:0,transition: {when: "beforeChildren", staggerChildren: 0.3,duration:0.7} }} className='pc:w-[750px] mobile:w-full mobile:h-[250px] pc:h-[597px] tablet:mr-0 mobile:mt-[40px] tablet:mt-[40px] tablet:w-full tablet:h-[500px] bg-box-light-violet rounded-[25px] overflow-hidden'>
                  <div className='px-[55px] pt-[72px]'>
                      <p className='text-[34px] tablet:text-[28px] mobile:text-[24px] font-semibold bg-gradient-to-l from-text-gra-1 to-text-gra-2 inline-block bg-clip-text text-transparent'>크레딧 구매시, 보너스 크레딧 증정</p>
                      <p className='text-[34px] tablet:text-[28px] mobile:text-[22px] font-semibold text-text-blue-deep'>크레딧 상품을 구매하면 상품별<br/>보너스 크레딧을 증정합니다</p>
                      <div className='mobile:hidden tablet:block'>
                        <img className='w-[644px] mt-[66px]' src={process.env.PUBLIC_URL+'assets/img/screen.png'} alt="img" />
                      </div>
                  </div>  
                </motion.div>

              </div>

              <div className='flex flex-row justify-center mt-[40px] mobile:flex-wrap tablet:flex-wrap pc:flex-nowrap'>
                <motion.div initial={{ opacity:0, y:20 }} whileInView={{opacity: 1, y:0,transition: {when: "beforeChildren", staggerChildren: 0.3,duration:0.7} }} className='pc:w-[855px] mobile:w-full mobile:h-[250px] pc:h-[720px] tablet:w-full tablet:h-[500px]  tablet:mr-0 bg-box-blue-light rounded-[25px] pc:mr-[54px] overflow-hidden'>
                  <div className='px-[54px] pt-[72px]'>
                      <p className='text-[34px] tablet:text-[28px] mobile:text-[24px] font-semibold text-text-blue-deep2'>전송 후 바로 발송확인 가능</p>
                      <p className='text-[34px] tablet:text-[28px] mobile:text-[22px] font-semibold text-text-blue-light2'>메세지 전송 후 바로 발송현황 창에서<br/>현재 메시지 전송 현황을 알려드립니다</p>
                      <div className='mobile:hidden tablet:block'>
                        <img className='w-[800px] h-[440px] mt-[66px] pc:mt-[100px] rounded-[10px]' src={process.env.PUBLIC_URL+'assets/img/dashboard2.png'} alt="img" />
                      </div>
                    </div>  
                </motion.div>

                <motion.div initial={{ opacity:0, y:20 }} whileInView={{opacity: 1, y:0,transition: {when: "beforeChildren", staggerChildren: 0.3,duration:0.7} }} className='pc:w-[520px] mobile:w-full mobile:h-[250px] pc:h-[720px] tablet:w-full tablet:h-[500px] mobile:mt-[40px] tablet:mt-[40px]  pc:mt-0  bg-box-yellow-light rounded-[25px] relative overflow-hidden'>
                  <div className='px-[55px] pt-[72px] overflow-hidden'>
                        <p className='text-[34px] tablet:text-[28px] mobile:text-[24px] font-semibold text-text-brown'>누르면 바로 전송완료</p>
                        <p className='text-[34px] tablet:text-[28px] mobile:text-[22px] font-semibold text-text-gray-2'>누르자마자 수신인에게<br/>바로 전달됩니다</p>
                        <div className='absolute mobile:hidden tablet:hidden pc:block w-[416px] h-[432px] mt-[66px] bottom-0 left-1/2 transform -translate-x-1/2'>
                          <img className='w-full' src={process.env.PUBLIC_URL+'assets/img/phoneframe.webp'} alt="img" />
                          <button className='w-[298px] pc:w-[250px] pc:h-[60px] pc:text-[20px] h-[67px] bg-button_color rounded-[20px] text-[24px] text-white absolute bottom-[20px] left-1/2 transform -translate-x-1/2'>전송하기</button>
                        </div>
                        <div className='absolute w-[200px] h-[300px] top-1/2 right-[50px] transform -translate-y-1/2 mobile:hidden pc:hidden widepc:hidden'>
                          <img className='w-full' src={process.env.PUBLIC_URL+'assets/img/phoneframe.webp'} alt="img" />
                          <button className='hidden tablet:block w-[130px] h-[40px] bg-button_color rounded-[20px] text-[14px] text-white absolute -bottom-[50px] left-1/2 transform -translate-x-1/2'>전송하기</button>
                        </div>
                  </div> 
                </motion.div>

              </div>

            </div>

          </div>
        </div>

       
        {/* page3 end */}

        <div className='widepc:px-[250px] mobile:px-[20px] tablet:px-[50px] pc:px-[50px] pb-[200px]'>
          <div className='w-[80px] h-[80px] m-auto mt-[150px]'>
            <img src={process.env.PUBLIC_URL+'assets/img/security.png'} alt="img" />
          </div>

          <div className='flex flex-col justify-center items-center text-center'>
            <p className='text-[56px] mobile:text-[30px] tablet:text-[38px] pc:text-[45px] font-semibold mt-[25px]'>정확도와 다양함은 물론<br/>신뢰할 수 있는 보안까지</p>
            <p className='mt-[25px]'>고객님들의 간편함을 고민하였습니다</p>
          </div>

          <div className='mt-[64px] flex flex-wrap justify-center'>
            
            <motion.div initial={{ opacity:0, scale:0.5 }} whileInView={{opacity: 1, scale:1,transition: {when: "beforeChildren", staggerChildren: 0.2,duration:0.4,delay: 0.2, ease: [0, 0.71, 0.2, 1.01]} }} className='w-[688px] h-[597px] mobile:w-full tablet:w-full pc:w-[calc(50%-22px)] tablet:h-[400px] mobile:h-[280px] pc:h-[500px] bg-box-aqua rounded-[25px] px-[54px] mobile:pt-[50px] tablet:pt-[72px] relative tablet:mr-0 pc:mr-[44px]'>
              <div>
                <p className='text-[34px] mobile:text-[24px] pc:text-[28px] tablet:text-[24px]'>일반 SMS는 기본, 카카오톡까지</p>
                <p className='text-[34px] mobile:text-[22px] pc:text-[28px] tablet:text-[24px] text-text-green-deep'>종류와 상관없이 모두 전송해 드립니다</p>
                <div className='widepc:w-[342px] widepc:h-[310px] pc:w-[270px] pc:h-[250px] tablet:w-[250px] tablet:h-[200px] mobile:w-[120px] mobile:h-[80px] absolute mobile:bottom-[40px] mobile:left-1/2 mobile:-translate-x-1/2 tablet:bottom-[50px] tablet:right-[30px] pc:bottom-[67px] pc:left-1/2 transform pc:-translate-x-1/2'>
                  <img className=' rounded-[20px]' src={process.env.PUBLIC_URL+'assets/img/kaka02.png'} alt="img"/>
                </div>
              </div>
            </motion.div>

            <motion.div  initial={{ opacity:0, scale:0.5 }} whileInView={{opacity: 1, scale:1,transition: {when: "beforeChildren", staggerChildren: 0.2,duration:0.4,delay: 0.3, ease: [0, 0.71, 0.2, 1.01]} }} className='w-[688px] mobile:w-full tablet:w-full pc:w-[calc(50%-22px)] h-[597px] mobile:h-[280px] mobile:mt-[44px] tablet:h-[400px] pc:h-[500px] bg-box-yellow-2 rounded-[25px] px-[54px] mobile:pt-[50px] tablet:pt-[72px] relative tablet:mt-[44px] pc:mt-0'>
              <div>
                <p className='text-[34px] mobile:text-[24px] pc:text-[28px] tablet:text-[24px]'>강력한 보안을 제공합니다</p>
                <p className='text-[34px] mobile:text-[22px] pc:text-[28px] tablet:text-[24px] text-[#696156]'>신뢰할 수 있는 최신의 보안 시스템을<br/>적용하여 개인정보를 보호합니다</p>
                <div className='widepc:w-[284px] pc:w-[180px] pc:h-[150px] widepc:h-[237px] tablet:w-[150px] mobile:w-[80px] absolute tablet:bottom-[50px] tablet:right-[50px] mobile:right-[50px] mobile:bottom-[20px] pc:bottom-[89px] pc:right-[109px]'>
                  <img className=' rounded-[20px]' src={process.env.PUBLIC_URL+'assets/img/lock.png'} alt="img"/>
                </div>
              </div>
            </motion.div>

            <motion.div  initial={{ opacity:0, scale:0.5 }} whileInView={{opacity: 1, scale:1,transition: {when: "beforeChildren", staggerChildren: 0.2,duration:0.4,delay: 0.4, ease: [0, 0.71, 0.2, 1.01]} }} className='w-[1420px] mobile:w-full tablet:w-full pc:w-full h-[495px] mobile:h-[280px] tablet:h-[400px] pc:h-[470px] bg-box-gray-light rounded-[25px] px-[54px] mobile:pt-[50px] tablet:pt-[72px] relative mt-[44px] overflow-hidden text-center'>
              <div>
                <p className='text-[34px] mobile:text-[24px] pc:text-[28px] tablet:text-[24px]'>놀라운 수신율을 경험해 보세요</p>
                <p className='text-[34px] mobile:text-[22px] pc:text-[28px] tablet:text-[24px] text-[#727B88]'>샌드고의 정확한 수신율은 99.8%에 달합니다</p>
                <div className='widepc:w-[704px] widepc:h-[286px] tablet:w-[500px] tablet:h-[200px] pc:w-[550px] pc:h-[220px] mobile:w-[200px] mobile:bottom-[-30px] absolute bottom-[0px] left-1/2 transform -translate-x-1/2'>
                  <img className=' rounded-[20px]' src={process.env.PUBLIC_URL+'assets/img/dashboard2.png'} alt="img"/>
                </div>
              </div>
            </motion.div>


          </div>

        </div>
        {/* page4 end  */}

        <div className='w-full widepc:px-[250px] mobile:px-[20px] tablet:px-[50px] pc:px-[50px] h-screen pt-[80px] bg-black text-white'>
          <div className='flex flex-col h-full justify-center items-center text-center'> 
            <motion.p initial={{ y: -80, opacity:0 }} whileInView={{opacity: 1, y:0,transition: {duration:0.8} }} className='bg-gradient-to-r from-[#B6B7F7] to-[#7FB2FE] inline-block bg-clip-text text-transparent mobile:text-[38px] tablet:text-[44px] pc:text-[50px] widepc:text-[60px] font-bold tracking-[3px]'>비지니스 광고의 시작,<br/>이제 샌드고와 함께 하세요</motion.p>
            <motion.button initial={{ scale:1 }} whileHover={{scale:1.1,transition: {duration:0.7} }} className='rounded-[30px] w-[206px] h-[65px] mobile:w-[170px] mobile:h-[60px] mobile:text-[18px] bg-button_color text-[21px] mt-[86px]'>메시지 바로가기</motion.button>
          </div>
        </div>
        {/* page5 end */}





    </>
  )
}

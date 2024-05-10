import React from 'react'
import PageDesc from '../../components/PageDesc'
import SelectWithSearch from '../../components/SelectWithSearch'
import ManageUserLIst from '../../components/ManageUserLIst'

export default function ManageUser() {


  return (
    <>
    <div className='w-full mt-[10px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]  widepc:pr-[120px] bg-white pb-[150px] min-h-[calc(100vh-220px)]'>
        <div className='flex flex-wrap'>
            

            <div className='w-full'>
                <PageDesc desc01={'- 비밀번호 확인 후 접속 가능한 페이지입니다'} desc02={'- 개인정보보호를 위하여 비밀번호를 다시 한번 입력해 주세요'}/>


                <div className='flex justify-between items-center mt-[56px]'>
                    <button className='w-[142px] h-[56px] mobile:w-[115px] mobile:h-[45px] rounded-[8px] text-white bg-[#5146F0]'>초대하기</button>
                    
                    <SelectWithSearch placeholder={'전체'} option01={'이름'} inputPlaceholder={'메일 또는 이름 입력'}/>
                </div>



                <div className='mt-[30px] border-t border-black '>


                    <ul className='w-full h-[60px] bg-[#F3F4F8] flex items-center text-center p-[5px]'>
                        
                        <li className='w-[30%] border-r border-[#CECECE]'>유저 프로필</li>
                        <li className='w-[15%] border-r border-[#CECECE]'>이름</li>
                        <li className='w-[25%] border-r border-[#CECECE]'>유저 권한 설정</li>
                        <li className='w-[15%] border-r border-[#CECECE]'>초대 일자</li>
                        <li className='w-[15%] '>현재상태</li>
                    </ul>

                    <ul className=''>
                        
                        <ManageUserLIst userId={'ceo@amuz.co.kr'} username={'ceo'} invitedAt={'2024.08.21'}/>
                        <ManageUserLIst userId={'user@amuz.co.kr'} username={'사용자1'} invitedAt={'2024.08.21'}/>

                        
                    </ul>
                </div>

                <div className='flex justify-center items-center mt-[56px]'>
                    <button className='w-[38px] h-[38px] text-white bg-button_color rounded-[8px]'>1</button>
                </div>




            </div>

           



        


        </div>
        
    </div>

   
   
   
    </>
  )
}

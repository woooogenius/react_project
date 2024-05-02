import React, { useEffect, useState } from 'react'
import TemplateModal from '../components/TemplateModal'
import ModalDelete from '../components/ModalDelete'
import ModalEdit from '../components/ModalEdit'

export default function ManageNumber() {

    const [clickDel, setClickDel] = useState(false)
    const onClickDel = ()=>{
        setClickDel(!clickDel)
    }

    const [clickEdit, setClickEdit] = useState(false)
    const onClickEdit = ()=>{
        setClickEdit(!clickEdit)
    }
   


  return (
    <>
    <div className='w-full mt-[10px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]  widepc:pr-[120px] bg-white pb-[150px] h-screen'>
        <div className='flex flex-wrap'>
            

            <div className='w-full'>
                <div className='text-[16px] text-[#525252] mt-[40px] mobile:text-[14px]'>
                    <p>- 문자 메세지를 발신하는 번호를 관리, 편집 할 수 있습니다.</p>
                    <p>- 발신번호는 개인회원은 최대 3개, 기업회원은 최대 10개까지 등록 가능합니다.</p>
                </div>


                <div className='flex justify-between items-center mt-[56px]'>
                     <h4 className='text-[20px]'>현재 발신번호 <span className='text-[#5146F0]'>1개</span></h4>

                    <button className='w-[142px] h-[56px] mobile:w-[115px] mobile:h-[45px] rounded-[8px] text-white bg-[#5146F0]'>추가하기</button>
                   
                
                </div>



                <div className='mt-[30px] border-t border-black '>


                    <ul className='w-full h-[60px] bg-[#F3F4F8] flex items-center text-center p-[5px]'>
                        
                        <li className='w-[20%] border-r border-[#CECECE]'>기본 선택</li>
                        <li className='w-[25%] border-r border-[#CECECE]'>발신번호</li>
                        <li className='w-[25%] border-r border-[#CECECE]'>관리명</li>
                        <li className='w-[15%] border-r border-[#CECECE]'>상태</li>
                        <li className='w-[15%] '>관리</li>
                    </ul>

                    <ul className=''>
                        {/* <div className='text-center text-[#3B3B3B]'>저장된 템플릿이 없습니다</div> */}
                        <li className='flex items-center py-[18px] text-center border-b border-[#CECECE]'>
                            <div className='w-[20%]'>기본 발신</div>
                            <div className='w-[25%]'>010-1111-2222</div>
                            <div className='w-[25%] flex justify-center'>
                                아뮤즈
                                <svg onClick={onClickEdit} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] ml-[5px] cursor-pointer">
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>

                            </div>
                            <div className='w-[15%] text-[#0014FF]'>인증완료</div>
                            <div className='w-[15%]'>
                                <button onClick={onClickDel} className='border border-[#CECECE] px-[20px] py-[5px] rounded-[8px]'>삭제</button>
                            </div>
                        </li>

                        
                    </ul>
                </div>

                <div className='flex justify-center items-center mt-[56px]'>
                    <button className='w-[38px] h-[38px] text-white bg-button_color rounded-[8px]'>1</button>
                </div>




            </div>

           



        


        </div>
        
    </div>

    {
        clickDel ? <ModalDelete modalTitle={'알림'} modalContent={'발신번호를 삭제하시겠습니까?'} onClose={()=>setClickDel(false)} /> : ''
    }
    {
        clickEdit ? <ModalEdit modalTitle={'수정'} editModalText={'관리명은 최대 20글자 입니다.'} onClose={()=>setClickEdit(false)} placeholder={'관리명 입력'}/> : ''
    } 
   
    </>
  )
}

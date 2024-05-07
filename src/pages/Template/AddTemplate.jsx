import React, { useEffect, useState } from 'react'
import TemplateModal from '../../components/TemplateModal'
import ModalDelete from '../../components/ModalDelete'

export default function AddTemplate() {

        
   const [clickAdd, setClickAdd] = useState(false)
   const onClickAdd = ()=>{
    setClickAdd(!clickAdd)
   }

   const [clickDel, setClickDel] = useState(false)
   const onClickDel = ()=>{
    setClickDel(!clickDel)
   }


  return (
    <>
        <div className='w-full mt-[10px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]  widepc:pr-[120px] bg-white pb-[150px]  min-h-[calc(100vh-220px)]'>
            <div className='flex flex-wrap'>
                

                <div className='w-full'>
                    <div className='text-[16px] text-[#525252] mt-[40px] mobile:text-[14px]'>
                        <p>- 최대 100개 템플릿까지 저장 가능합니다.</p>
                        <p>- 템플릿은 최대 1년까지만 보관됩니다.</p>
                    </div>


                    <div className='flex justify-between mobile:justify-normal mobile:flex-wrap mt-[56px]'>
                        <div className='mobile:w-full mobile:mt-[20px] mobile:order-2'>
                            <button onClick={onClickAdd} className='w-[142px] mobile:w-[calc(50%-8px)] h-[56px] rounded-[8px] text-white bg-[#5146F0] mr-[16px]'>등록하기</button>
                            <button onClick={onClickDel} className='w-[142px] mobile:w-[calc(50%-8px)]  h-[56px] rounded-[8px] text-[#5146F0] border border-[#5146F0]'>삭제하기</button>
                        </div>

                        <div className='flex mobile:w-full mobile:order-1'>
                            <select name="select_message" id="select_message" className='pc:w-[165px] tablet:w-[130px] mobile:w-[calc(50%-5px)] h-[55px] border border-[#CECECE] rounded-[8px] mr-[15px] px-[10px]'>
                                <option value="전체메시지">전체메시지</option>
                                <option value="메시지">메시지</option>
                            </select>

                            
                            <div className=' relative tablet:w-[170px] pc:w-[210px] h-[55px] mobile:w-[calc(50%-5px)]'>
                                <input type="text" placeholder='제목 또는 내용입력' className='w-full h-full border border-[#CECECE] rounded-[8px] px-[10px]'/>
                                <div className='absolute top-1/2 right-[10px] transform -translate-y-1/2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                            </div> 

                        </div>

                    
                    
                    </div>

                    <div className='mt-[30px] border-t border-black '>
                        <ul className='w-full h-[60px] bg-[#F3F4F8] flex items-center text-center p-[5px]'>
                            <li className='w-[5%] border-r border-[#CECECE]'>
                                <input type="checkbox" className='border border-[#CECECE] w-[20px] h-[20px]'/>
                            </li>
                            <li className='w-[25%] border-r border-[#CECECE]'>제목</li>
                            <li className='w-[25%] border-r border-[#CECECE]'>내용</li>
                            <li className='w-[15%] border-r border-[#CECECE]'>메세지 형태</li>
                            <li className='w-[15%] border-r border-[#CECECE]'>일자</li>
                            <li className='w-[15%] '>상세보기</li>
                        </ul>

                        <ul className='border-b border-[#CECECE] py-[30px]'>
                            <div className='text-center text-[#3B3B3B]'>저장된 템플릿이 없습니다</div>
                        </ul>
                    </div>

                    <div className='flex justify-center items-center mt-[56px]'>
                        <button className='w-[38px] h-[38px] text-white bg-button_color rounded-[8px]'>1</button>
                    </div>




                </div>

            



            


            </div>
            
        </div>
        {
            clickAdd ? <TemplateModal onClose={()=>setClickAdd(false)}/> : ''

        }
        {
            clickDel ?  <ModalDelete modalTitle={'알림'} modalContent={'선택한 템플릿 N개를'} modalContent2={'삭제하시겠습니까?'} onClose={()=>setClickDel(false)} />: ''
        }
    </>
  )
}

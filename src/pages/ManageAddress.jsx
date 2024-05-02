import React, { useEffect, useState } from 'react'
import ModalDelete from '../components/ModalDelete'
import AddAddressModal from '../components/AddAddressModal'
import ModalEdit from '../components/ModalEdit'

export default function ManageAddress() {

    
    const [isClicked, setIsClicked] = useState(false)
    const onClickAdd = ()=>{
        setIsClicked(!isClicked)
    }

    const [isDelete, setIsDelete] = useState(false)
    const onClickDelete = ()=>{
        setIsDelete(!isDelete)
    }

    const [addFolder, setAddFolder] = useState(false)
    const onClickAddFolder = ()=>{
        setAddFolder(!addFolder)
    }


  return (
    <>
    <div className='w-full mt-[10px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]  widepc:pr-[120px] bg-white pb-[150px] h-screen'>
        <div className='flex flex-wrap'>
            
            <div className='text-[16px] text-[#525252] mt-[30px] mobile:text-[14px]'>
                <p>- 발송 대상을 그룹별로 분류하여 주소록으로 작성하면 간편하게 관리하고 발송할 수 있습니다.</p>
                <p>- 등록한 그룹을 새 그룹으로 합치거나 삭제, 다른 폴더로 이동할 수 있습니다.</p>
            </div>

            <div className='w-full flex mobile:flex-wrap tablet:flex-nowrap mt-[50px]'>
                
                <div className='pc:w-[50%] widepc:w-[40%] tablet:w-full mobile:w-full'>
                   
                    <div className='flex  border border-[#CECECE] rounded-[8px]'>
                       
                        <select name="" id="" className='w-[30%] rounded-[8px] px-[10px]'>
                            <option value="전체검색">전체검색</option>
                        </select>

                        <div className='pc:w-[70%] relative h-[55px] '>
                            <input type="text" placeholder='제목 또는 내용입력' className='w-full h-full px-[10px] rounded-[8px]'/>
                            <div className='absolute top-1/2 right-[10px] transform -translate-y-1/2 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div> 

                    </div>

                    <div className='w-full h-[495px] border border-[#CECECE] mt-[16px] rounded-[8px]'>
                            
                        <div className='flex justify-between px-[20px] h-[70px] items-center border-b border-[#CECECE] bg-[#F2F5FF] rounded-t-[8px] relative'>
                            <div className='h-full border-l-[6px] border-[#5146F0] rounded-tl-[8px] absolute left-0 top-0'></div>
                            <div className='flex text-[#5146F0]'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-[15px]">
                                    <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                                </svg>
                                전체 (2)
                            </div>
                            <button onClick={onClickAddFolder} className='px-[15px] py-[5px] bg-white border border-[#CECECE] rounded-[8px]'>폴더 추가</button>
                        </div>

                        <ul className='flex flex-col'>
                            <li className='flex justify-between px-[20px] h-[70px] items-center border-b border-[#CECECE]  rounded-t-[8px] '>
                                <div className='flex'>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-[15px]">
                                     <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                    </svg>
                                    


                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-[15px]  text-[#5146F0]">
                                        <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                                    </svg>
                                    기본폴더 (2)
                                </div>

                                <div className='flex'>

                                    <button className='mr-[20px] text-[#A2A2A2]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                        </svg>
                                    </button>

                                    <button className='text-[#A2A2A2]'>
                                        <svg onClick={onClickDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>

                                </div>
                            </li>
                        </ul>

                    </div>

                </div>

                 
                <div className='widepc:w-[calc(60%-50px)] pc:w-[calc(50%-50px)] mobile:ml-0 mobile:mt-[50px] ml-[50px] tablet:w-full mobile:w-full'>

                    <div className='flex justify-between'>
                       
                        <button onClick={onClickAdd} className='bg-[#5146F0] rounded-[8px] text-white w-[160px] h-[60px]'>연락처 추가하기</button>

                        <select name="" id="" className='w-[111px] h-[60px] border border-[#5146F0] rounded-[8px] text-center text-[#5146F0]'>
                            <option value="edit">편집</option>
                        </select>

                    </div>

                    <div className='mt-[30px] border-t border-black '>
                        <ul className='w-full h-[60px] bg-[#F3F4F8] flex items-center text-center p-[5px]'>
                            <li className='w-[5%] border-r border-[#CECECE]'>
                                <input type="checkbox" className='border border-[#CECECE] w-[20px] h-[20px]'/>
                            </li>
                            <li className='w-[30%] border-r border-[#CECECE]'>휴대폰 번호</li>
                            <li className='w-[25%] border-r border-[#CECECE]'>이름</li>
                            <li className='w-[20%] border-r border-[#CECECE]'>그룹명</li>
                            <li className='w-[10%] border-r border-[#CECECE]'>변수</li>
                            <li className='w-[10%] '>수정</li>
                        </ul>

                        <ul className='border-b border-[#CECECE]'>
                            {/* <div className='text-center text-[#3B3B3B]'>저장된 번호가 없습니다</div> */}
                            <li className='w-full flex items-center h-[60px]  text-center p-[5px]'>
                                <div className='w-[5%] '>
                                    <input type="checkbox" className='border border-[#CECECE] w-[20px] h-[20px]'/>
                                </div>
                                <div className='w-[30%] '>010-1111-2222</div>
                                <div className='w-[25%]'>김철수</div>
                                <div className='w-[20%] '>기본폴더</div>
                                <div className='w-[10%] '>1개</div>
                                <div className='w-[10%]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>




                </div>
                




              




            </div>

           



        


        </div>
        
    </div>

    {
        isClicked ? <AddAddressModal onClose={()=>setIsClicked(false)}/> : ''
    }
   {
    isDelete ? <ModalDelete onClose={()=>setIsDelete(false)} modalTitle={'알림'} modalContent={'연락처 1개를'} modalContent2={'삭제하시겠습니까?'}/> : ''
   }
   {
    addFolder ? <ModalEdit modalTitle={'폴더 추가'} editModalText={'폴더명은 최대 20글자 입니다.'} onClose={()=>setAddFolder(false)} placeholder={'폴더명'}/> : ''
   }
    </>
  )
}

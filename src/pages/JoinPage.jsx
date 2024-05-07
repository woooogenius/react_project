import React, { useState } from 'react'
import JoinHeader from '../components/JoinHeader'
import ModalDelete from '../components/ModalDelete'
import BasicModal from '../components/BasicModal'

export default function JoinPage() {

    const [checkItems, setCheckItems] = useState({
        agree : false,
        third : false,
        terms : false,
        all : false,
    })

    const handleAllCheck = (checked)=>{
        setCheckItems({
            agree : checked,
            third : checked,
            terms : checked,
            all : checked,
        })
    }

    const handleCheck = (checked, id) =>{
        if(id == 'all'){
            handleAllCheck(checked)
        }else{
            setCheckItems(prev=>({
                ...prev,
                [id]:checked
            }))
        }

    }


    const [isJoin, setIsJoin] = useState(false)
    const onClickJoin = ()=>{
        setIsJoin(true)
    }

    

  return (
    <>
        <JoinHeader/>
        <div className='pt-[80px] tablet:w-[560px] m-auto mobile:w-[full] mobile:px-[20px]'>
            <h4 className=' mt-[50px] text-center text-[24px] font-bold'>회원가입</h4>
             <div className='flex items-center justify-center'>
                <label htmlFor="profile_img" className='inline-block mt-[72px] relative'>
                    <input type="file" accept='image/*' id='profile_img' hidden multiple/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[122px] h-[122px] rounded-full text-[#CECECE]">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>

                     <div className='w-[38px] h-[38px] flex border rounded-full justify-center items-center text-[#484848] absolute bottom-[13px] right-[5px] bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                    </div>

                </label>
            </div>


                                    
            <div>
                <h4 className='text-[16px] mt-[30px]'>이름</h4>
                <div className=' mt-[10px]'>
                    <input type="text"  placeholder='이름'  className={` w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`}/>
                </div> 
            </div>

            <div>
                <h4 className='text-[16px] mt-[30px]'>본인인증</h4>
                <div className=' mt-[10px] flex'>
                    <input type="text"  placeholder='전화번호 본인인증' className={` w-[calc(80%-16px)] h-[55px]  border border-[#CECECE] rounded-[8px] px-[15px]`}/>
                    <button  className='w-[calc(20%)] ml-[16px] rounded-[8px] border border-[#5146F0] text-[#5146F0]'>인증하기</button>
                </div> 
            </div>

            <h4 className='text-[16px] mt-[20px]'>이메일</h4>
            <div className=' mt-[10px]'>
                <input type="text"  placeholder='이메일' className={` w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`}/>
            </div>

            <h4 className='text-[16px] mt-[20px]'>비밀번호</h4>
            <div className=' mt-[10px]'>
                <input type="text"  placeholder='8~20자의 영문, 숫자, 특수문자 조합' className={` w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`}/>
            </div>

            <h4 className='text-[16px] mt-[20px]'>비밀번호 확인</h4>
            <div className=' mt-[10px]'>
                <input type="text"  placeholder='8~20자의 영문, 숫자, 특수문자 조합' className={` w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`}/>
            </div>
                                
           <div>
                <p className='h-[56px] text-[14px] flex items-center justify-center mt-[64px] px-[20px] py-[10px] bg-[#EFF4FF] rounded-[8px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#5146F0] mr-[10px]">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>
                    기업회원이 아니신가요? 개인계정으로 가입 후 기업 프로필을 꼭 추가해 주세요!
                </p>
           </div>

           <div className='border-b border-[#CECECE] w-full mt-[30px]'></div>

            <label htmlFor='all' className='flex text-[#1C1C1C] my-[26px]'>
                <input id='all' onChange={(e)=> handleAllCheck(e.target.checked)} checked={checkItems.all} type="checkbox" className='w-[22px] h-[22px] mr-[15px] rounded-[6px] border border-[#CECECE]'/>
                <p>모든 약관에 동의합니다</p>
            </label>

           <div className='border-b border-[#CECECE] w-full mt-[30px]'></div>

            <label htmlFor='agree' className='flex text-[#1C1C1C] my-[26px]'>
                <input id='agree' checked={checkItems.agree} onChange={(e)=>handleCheck(e.target.checked, e.target.id)} type="checkbox" className='w-[22px] h-[22px] mr-[15px] rounded-[6px] border border-[#CECECE]'/>
                <p>(필수) 개인정보 수집에 동의합니다</p>
            </label>
            <label htmlFor='third' className='flex text-[#1C1C1C] my-[26px]'>
                <input id='third' checked={checkItems.third} onChange={(e)=>handleCheck(e.target.checked, e.target.id)} type="checkbox" className='w-[22px] h-[22px] mr-[15px] rounded-[6px] border border-[#CECECE]'/>
                <p>(필수) 제 3자 제공 동의</p>
            </label>
            <label htmlFor='terms' className='flex text-[#1C1C1C] my-[26px]'>
                <input id='terms' checked={checkItems.terms} onChange={(e)=>handleCheck(e.target.checked, e.target.id)} type="checkbox" className='w-[22px] h-[22px] mr-[15px] rounded-[6px] border border-[#CECECE]'/>
                <p>(약관 내용)에 동의합니다</p>
            </label>

            <div className='border-b border-[#CECECE] w-full mt-[30px]'></div>

            <button onClick={onClickJoin} className='w-full rounded-[8px] h-[56px] text-white bg-button_color mt-[80px] mb-[100px]'>가입하기</button>





        </div>

        {
            isJoin ? <BasicModal onClose={()=>setIsJoin(false) } modalTitle={'가입완료'} modalContent={'회원가입이 완료되었습니다'} modalContent2={'샌드고 서비스를 이용해보세요!'} imgSrc={process.env.PUBLIC_URL+'assets/img/checkround.png'}/> : null
        }
    </>
  )
}

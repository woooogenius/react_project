import React, { useEffect, useState } from 'react'
import DelAccountModal from '../../components/Modal/DelAccountModal'
import MyPageInput from '../../components/MyPageInput'

export default function ManageBusinessProfile() {

    
    const [isWrite, setIsWrite] = useState('')
    const onChangeWrite = (e)=>{
        setIsWrite(e.target.value)
    }


    const [name, setName] = useState('')
    const onChangeName = (e)=>{
        setName(e.target.value)
    }

    const [bizNum, setBizNum] = useState('')
    const onChangeBizNum = (e)=>{
        setBizNum(e.target.value)
    }

    const [phoneNum, setPhoneNum] = useState('010-1111-2222')
    const onChangePhoneNum = (e)=>{
        setPhoneNum(e.target.value)
    }
    const onClickChangeNum = (e)=>{
        setPhoneNum(e.target.value)
    }

  
    const [bizKind, setBizKind] = useState('')
    const onChangeKind = (e)=>{
        setBizKind(e.target.value)
    }

    const [type, setType] = useState('')
    const onChangeType = (e)=>{
        setType(e.target.value)
    }

    const [location, setLocation] = useState('')
    const onChangeLocation = (e)=>{
        setLocation(e.target.value)
    }

    const [representativeNum, setRepresentativeNum] = useState('')
    const onChangeRepresentativeNum = (e)=>{
        setRepresentativeNum(e.target.value)
    }
    
    const [representativePerson, setRepresentativePerson] = useState('')
    const onChangeRepresentativePerson = (e)=>{
        setRepresentativePerson(e.target.value)
    }

    const [calculatePerson, setCalculatePerson] = useState('')
    const onChangeCaculatePerson = (e)=>{
        setCalculatePerson(e.target.value)
    }

    const [calculateNum, setCalculateNum] = useState('')
    const onChangeCalculateNum = (e)=>{
        setCalculateNum(e.target.value)
    }

    const [calcEmail, setCalcEmail] = useState('')
    const onChangeCalcEmail = (e)=>{
        setCalcEmail(e.target.value)
    }

    const [deleteAccount, setDeleteAccount] = useState(false)
    const onClickDeleteAccount = ()=>{
        setDeleteAccount(!deleteAccount)
    }

  return (
    <>
    <div className='w-full mt-[10px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]  widepc:pr-[120px] bg-white pb-[150px] min-h-[calc(100vh-220px)]'>
        <div className='flex flex-wrap'>
            

            <div className='w-full flex'>
                <div className='pc:w-[50%] widepc:w-[40%] tablet:w-full mobile:w-full'>

                 
                        
                        <div>
                            <div className='mt-[56px]'>

                                <h4 className='text-[16px] mt-[50px]'>프로필 사진</h4>
                                <label htmlFor="profile_img" className='inline-block mt-[10px] relative'>
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

                                <MyPageInput title={'사업자 유형'} onChangeWrite={onChangeWrite} value={isWrite} placeholder={'사업자유형'} isWrite={isWrite}/>
                                
                                <MyPageInput title={'기업명'} onChangeWrite={onChangeName} placeholder={'기업명'} value={name} isWrite={name}/>

                                <MyPageInput title={'사업자 등록번호'} onChangeWrite={onChangeBizNum} placeholder={'사업자 등록번호'} value={bizNum} isWrite={bizNum}/>

                                <MyPageInput title={'사업자 유형'} onChangeWrite={onChangeKind} placeholder={'사업자 유형'} value={bizKind} isWrite={bizKind}/>
                                    
                                <MyPageInput title={'업종'} onChangeWrite={onChangeType} placeholder={'업종'} value={type} isWrite={type}/>

                                <MyPageInput title={'사업장 소재지'} onChangeWrite={onChangeLocation} placeholder={'사업장 소재지'} value={location} isWrite={location}/>

                                <MyPageInput title={'대표번호'} onChangeWrite={onChangeRepresentativeNum} placeholder={'대표번호'} value={representativeNum} isWrite={representativeNum}/>

                                <MyPageInput title={'대표자 연락처'} onChangeWrite={onChangeRepresentativePerson} placeholder={'대표자 연락처'} value={representativePerson} isWrite={representativePerson}/>

                                <MyPageInput title={'정산 및 계산서 발행 담당자명'} onChangeWrite={onChangeCaculatePerson} placeholder={'담당자명'} value={calculatePerson} isWrite={calculatePerson} />

                                <MyPageInput title={'담당자 연락처'} onChangeWrite={onChangeCalculateNum} placeholder={'담당자 연락처'} value={calculateNum} isWrite={calculateNum}/>

                                <MyPageInput title={'계산서 발행 이메일 주소'} onChangeWrite={onChangeCalcEmail} placeholder={'이메일 주소'} value={calcEmail} isWrite={calcEmail}/>

                                
                                <p onClick={onClickDeleteAccount} className='underline text-[#484848] mt-[121px] cursor-pointer text-[18px]'>프로필 삭제</p>
                               

                            </div>
                        </div>
                   
                    

                </div>
                


                <div className='pc:w-[60%] tablet:hidden mobile:hidden'>

                </div>

              




            </div>

           



        


        </div>
        
    </div>

    {
        deleteAccount ?  <DelAccountModal onClose={()=>setDeleteAccount(false)} /> : ''

    }

   
    </>
  )
}

import React from 'react'

export default function ManageUserLIst({userId,username,invitedAt}) {
  return (
    <>
        <li className='flex items-center py-[18px] text-center border-b border-[#CECECE]'>
            <div className='w-[30%] flex items-center px-[15px]'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[56px] h-[56px] mr-[16px]">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                </div>
                <p className='text-[#4A4A4A] text-[18px]'>{userId}</p>
            </div>
            <div className='w-[15%]'>{username}</div>
            <div className='w-[25%] flex justify-center px-[15px]'>
                
                <select className='border border-[#CECECE] w-full h-[48px] rounded-[8px] px-[20px] bg-[#8E8E8E05]'>
                    <option value="owner">소유자</option>
                    <option value="manager">관리자</option>
                    <option value="user">일반유저</option>
                </select>

            </div>
            <div className='w-[15%] text-[#4A4A4A]'>{invitedAt}</div>
            <div className='w-[15%] px-[15px] flex justify-between'>
                <div className='flex items-center'>
                    <div className='w-[8px] h-[8px] bg-[#5146F0] rounded-full mr-[8px]'></div>
                    <p>가입완료</p>
                </div>    
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[25px] h-[25px] cursor-pointer">
                        <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </li>
    </>
  )
}

import React from 'react'

export default function MobileMenu({onClose}) {
    const handleClose = ()=>{
        onClose()
    }
  return (
    <>
        <div className='absolute top-0 left-0 z-40 '>
            <div className="fixed top-0 left-0 w-full h-full bg-white z-10 opacity-50"></div>
            <div className="fixed top-0 z-50">
                <div className="w-full relative">
                    <div className='bg-[#222222] text-white w-[250px] h-screen px-5 py-6 absolute left-0 top-0 z-50'>
                        <div onClick={handleClose} className="mb-[77px] text-xl">X</div>
                        <div>
                                
                            <img src={process.env.PUBLIC_URL+'assets/img/google.png'} alt="img" />

                        </div>         

                         <div className='py-6 mt-[50px]'>
                                
                             <a className="block px-3 py-4 rounded-[25px] text-center mb-5 cursor-pointer transition delay-75 bg-button_color text-[#eeeeee]">메시지전송</a>
                             <a className="block px-3 py-4 rounded-[25px] text-center mb-5 cursor-pointer transition delay-75 bg-button_color  text-[#eeeeee]">크레딧</a>
                             <a className="block px-3 py-4 rounded-[25px] text-center mb-5 cursor-pointer transition delay-75 bg-button_color  text-[#eeeeee]">고객센터</a>
                                    

                        </div> 

                    </div>
                </div>
            
            </div>
        </div>
    </>
  )
}

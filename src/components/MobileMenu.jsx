import React from 'react'
import { motion } from "framer-motion";

export default function MobileMenu({onClose}) {
    const handleClose = ()=>{
        onClose()
    }
  return (
    <>
        <motion.div initial={{ opacity:0 }} whileInView={{opacity: 1,transition: {duration:0.5} }}  className='absolute top-0 left-0 z-50'>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50"></div>
            <div className="fixed top-0 z-50">
                <div className="w-full relative">
                    <motion.div initial={{ x: -70, opacity:0 }} whileInView={{opacity: 1, x:0,transition: {duration:0.5} }} className='bg-[#222222] text-white w-[250px] h-screen px-5 py-6 absolute left-0 top-0 z-50'>
                        <div onClick={handleClose} className="mb-[77px] text-xl">X</div>
                        <div>
                                
                            <img src={process.env.PUBLIC_URL+'assets/img/google.png'} alt="img" />

                        </div>         

                         <div className='py-6 mt-[50px]'>
                                
                             <a className="block px-3 py-4 rounded-[25px] text-center mb-5 cursor-pointer transition delay-75 bg-button_color text-[#eeeeee]">메시지전송</a>
                             <a className="block px-3 py-4 rounded-[25px] text-center mb-5 cursor-pointer transition delay-75 bg-button_color  text-[#eeeeee]">크레딧</a>
                             <a className="block px-3 py-4 rounded-[25px] text-center mb-5 cursor-pointer transition delay-75 bg-button_color  text-[#eeeeee]">고객센터</a>
                                    

                        </div> 

                    </motion.div>
                </div>
            
            </div>
        </motion.div>
    </>
  )
}

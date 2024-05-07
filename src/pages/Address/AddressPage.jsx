import React, { useEffect, useState } from 'react'
import ManageAddress from './ManageAddress'
import Page from '../../components/Page'

export default function AddressPage() {

   

    const sections = [
        {
            title : '주소록 관리',
            components : [
                {name : 'address', label : '주소록 관리', component : ManageAddress},
                

            ]
        },
       
    ]


   
   
  return (
    <>
       
       {
            sections.map((val,idx)=>(
                <Page key={idx} title={val.title} components={val.components}/>
            ))
        }
        
        
    </>
  )
}

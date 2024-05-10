import React, { useEffect, useState } from 'react'
import ManageBusinessProfile from './ManageBusinessProfile'
import Page from '../../components/Page'
import ManageUser from './ManageUser'

export default function BusinessProfilePage() {

    
    
    const sections = [
        {
            title : '마이페이지',
            components : [
                {name : 'profile', label : '프로필 관리', component : ManageBusinessProfile},
                {name : 'management', label : '유저 관리', component : ManageUser},

            ]
        }
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

import React, { useEffect, useState } from 'react'
import DashHeader from '../../components/DashHeader'
import SideMenu from '../../components/SideMenu'
import MobileSideMenu from '../../components/MobileSideMenu'
import UserInfoPage from './UserInfoPage'
import ChangePasswd from './ChangePasswd'
import ManageBusinessProfile from './ManageBusinessProfile'
import Page from '../../components/Page'

export default function BusinessProfilePage() {

    
    
    const sections = [
        {
            title : '마이페이지',
            components : [
                {name : 'profile', label : '프로필 관리', component : ManageBusinessProfile},
                {name : 'management', label : '유지 관리', component : ChangePasswd},

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

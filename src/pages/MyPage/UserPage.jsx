import React, { useEffect, useState } from 'react'
import UserInfoPage from './UserInfoPage'
import ChangePasswd from './ChangePasswd'
import Page from '../../components/Page'
import BusinessProfilePage from './BusinessProfilePage'

export default function UserPage() {

   

    const sections = [
        {
            title : '마이페이지',
            components : [
                {name : 'userinfo', label: '회원정보', component : UserInfoPage},
                {name : 'changepw', label: '비밀번호 변경', component : ChangePasswd},
                {name : 'business', label: '기업프로필 추가', component : BusinessProfilePage},

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

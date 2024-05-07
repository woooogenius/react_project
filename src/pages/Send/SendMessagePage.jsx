import React, { useEffect, useState } from 'react'
import DashHeader from '../../components/DashHeader'
import SideMenu from '../../components/SideMenu'
import MessagePage from '../Send/MessagePage'
import KakaoAlert from '../Send/KakaoAlert'
import KakaoFriend from '../Send/KakaoFriend'
import MobileSideMenu from '../../components/MobileSideMenu'
import Page from '../../components/Page'

export default function SendMessagePage() {


    const sections = [
        {
            title : '메시지 전송',
            components : [
                {name : 'send', label : '메시지 전송', component : MessagePage},
                {name : 'kakao', label : '카카오 알림톡', component : KakaoAlert},
                {name : 'friend', label : '카카오 친구톡', component : KakaoFriend}

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

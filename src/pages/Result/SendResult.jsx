import React from 'react'
import ResultPage from './ResultPage'
import ResultKakao from './ResultKakao'
import Page from '../../components/Page'

export default function SendResult() {

    const sections = [
        {
            title : '전송 내역',
            components : [
                {name : 'message', label : '메시지 내역', component: ResultPage},
                {name : 'kakaoResult', label : '카카오톡 내역', component: ResultKakao},
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

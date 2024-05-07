import React, { useEffect, useState } from 'react'
import DashHeader from '../../components/DashHeader'
import SideMenu from '../../components/SideMenu'
import MobileSideMenu from '../../components/MobileSideMenu'
import AddTemplate from '../Template/AddTemplate'
import ManageNumber from './ManageNumber'
import AddNum from './AddNum'
import Page from '../../components/Page'

export default function NumberPage() {

    const sections = [
        {
            title : '발신번호 관리',
            components : [
                {name : 'number', label : '발신번호 관리', component : ManageNumber},
                {name : 'addNumber', label : '발신번호 추가', component : AddNum},

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

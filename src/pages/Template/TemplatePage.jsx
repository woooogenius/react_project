import React, { useEffect, useState } from 'react'
import AddTemplate from './AddTemplate'
import Page from '../../components/Page'

export default function TemplatePage() {

    const sections = [
        {
            title : '템플릿 관리',
            components : [
                {name : 'template', label : '템플릿 관리', component : AddTemplate},

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

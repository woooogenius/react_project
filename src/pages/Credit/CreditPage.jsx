import React, { useEffect, useState } from 'react'
import DashHeader from '../../components/DashHeader'
import SideMenu from '../../components/SideMenu'
import MobileSideMenu from '../../components/MobileSideMenu'
import ResultKakao from '../Result/ResultKakao'
import BuyCredit from './BuyCredit'
import ListCredit from './ListCredit'
import Page from '../../components/Page'

export default function CreditPage() {

    const [isChecked, setIsChecked] = useState('buy')

    const handleChecked = (value)=>{
        setIsChecked(value);
    }


    const sections = [
        {
            title : '크레딧',
            components : [
                {name : 'buyCredit', label : '크레딧 구매', component : BuyCredit},
                {name : 'buyList', label : '구매 내역', component : ListCredit},
                // {name : 'useList', label : '사용 내역', component : }

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

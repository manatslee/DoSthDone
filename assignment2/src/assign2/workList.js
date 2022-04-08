import { useState } from 'react'
import styled from 'styled-components'

export default function WorkList({listWork,setListWork,setWorked,worked}){
    const [showWork,setShowWork] = useState({})
    
    const TD = styled.td`
        color:black;
        &:nth-child(odd){
            background-color:#99baef;
        }
        &:nth-child(even){
            background-color:#00ABA9;
            
        }
        &:hover{
            background-color:silver;
            border-bottom: 3px solid #fd6d49;
        }`
    const TR = styled.tr`
        &:hover{
            border-bottom: 5px solid #fd6d49;
        }
    `
    const ShowList = styled.div`
        background-color:#fff6aa;
        display:flex;
        width:100%;
        height:100vh;
        justify-content:space-evenly;
        font-size:1.2em;
        font-family: 'IBM Plex Sans Thai', sans-serif;
    `
    const CenterTable = styled.table` text-align: center;`
    const Checkbox = styled.input`
    &[type='checkbox']:after{
        line-height: 1.5em;
        content: '';
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-top: -4px;
        margin-left: -4px;
        border: 1px solid rgb(192,192,192);
        border-radius: 0.25em;
        background: rgb(224,224,224);
    }
    &[type='checkbox']:checked:after {
        width: 15px;
            height: 15px;
            border: 3px solid #00ff00;
        }
    &[type='checkbox']::hover {
        background:#fd6d49;
    }
    `
    const deleteList = (id)=>{
        let temp = listWork.filter((element,index)=>{
            if(index===id){
                setWorked([...worked,element])
            }
            return index!== id
        })
        setListWork(temp)

    }
    let click =(e,id) =>{
        let work = listWork[id]
        setShowWork(work)
    }
    let list = listWork.map((e,index)=>{
        return (e!==""
                &&<TR key={`${e.course}-${index}`} onMouseDown={(e)=>click(e,index)}>
                    <td><Checkbox type="checkbox"onClick={()=>deleteList(index)}/></td>
                    <TD>{e.course}</TD>
                    <TD>{e.workName}</TD>
                </TR>)
    })
    return(
        <>
            <ShowList>
                <div style={{width:"20vw"}}></div>
                <div style={{width:"40vw"}}>
                    <h4>รายการงานของคุณ<br/><br/>{listWork.length!==0?"งานของคุณที่เหลืออยู่":"คุณไม่มีงานคงเหลือ"}</h4>
                    
                    <div>
                    {listWork.length!==0&&<CenterTable>
                            <thead>
                                <tr>
                                    <th style={{padding:"10px"}}>เสร็จหรือยัง</th>
                                    <th style={{padding:"10px"}}>ชื่อวิชา/รหัสวิชา</th>
                                    <th style={{padding:"10px"}}>ชื่องาน</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list}
                            </tbody>
                    </CenterTable>}
                    </div>
                </div>
                <div style={{width:"5vw"}}></div>
                <div style={{width:"40vw"}}>
                    <h4>รายละเอียดงานของคุณ</h4>
                    {listWork.length!==0&&showWork!==""
                    &&<div>
                        <div>ชื่อวิชา/รหัสวิชา: {showWork.course}</div><br/>
                        <div>ชื่องาน: {showWork.workName}</div><br/>
                        <div>รายละเอียดงาน: {showWork.detail}</div><br/>
                        <div>วันที่ต้องส่ง: {showWork.date}</div><br/>
                        <div>รูปแบบงาน: {showWork.type}</div><br/>
                    </div>}
                </div>
                <div style={{width:"20vw"}}></div>
            </ShowList>
        </>
    )
}
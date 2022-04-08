import { useState } from "react";
import Form from './form'
import WorkList from './workList'
import Stopwatch from './AppTimer.js'
import Deleted from './showFileList.js'
import { BrowserRouter,Routes,Route, NavLink} from "react-router-dom";
import styled from "styled-components";
import img from './home.jpeg'

export default function Home(){
    let [listWork,setListWork] = useState([]);
    let [worked,setWorked] = useState([])
    let submit = (e,course,workName,detail,date,type) =>{
        e.preventDefault();
        const work={course,workName,detail,date,type}
        setListWork([...listWork,work])
        console.log(listWork)
    }
    const Nav = styled.nav`
        height:5vh;
        font-family: 'IBM Plex Sans Thai', sans-serif;
        background-color:#00ABA9;
        margin-bottom : 0px;
    `
    const Navi = styled(NavLink)`
        color:white;
        padding:10px;
        text-decoration:none;
        margin-top:10px;
        margin-bottom : 0px;
        font-weight: bold;
        &:hover{
            color:black;
            text-decoration:underline;
        }2
        &[class*="active"]{
            color:black;
            text-decoration:underline;
        }
    `
    const Home = <><div className="img"><h1 className="center">โปรดเลือกเมนูด้านบน</h1><img  src={img} style={{height:"80vh"}}/></div></>
    return(
        <>
        <BrowserRouter>
            <Nav>
                <Navi to="/">Home</Navi>
                <Navi to="/form">เพิ่มรายการงาน</Navi>
                <Navi to="/home">ดูรายการงานที่เพิ่ม</Navi>
                <Navi to="/completed">ดูรายการงานที่เสร็จแล้ว</Navi>
                <Navi to="/timer">จับเวลา</Navi>
            </Nav>
            <Routes>
                <Route path="/" element={Home}/>
                <Route path="/home" element={<WorkList 
                                            listWork={listWork}
                                            setListWork={setListWork}
                                            setWorked={setWorked}
                                            worked={worked}
                                            />}/>
                <Route path="/form" element={<Form submitForm={submit}/>}/>
                <Route path="/completed" element={<Deleted worked={worked}/>}/>
                <Route path="/timer" element={<Stopwatch submitForm={submit}/>}/>
                <Route path="*" element={<h2>Error</h2>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

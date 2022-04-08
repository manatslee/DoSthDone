import {useState} from 'react';
import styles from './form.module.css'
export default function Form({submitForm}){
    const [course,setCourse]=useState('');
    const [workName,setWorkName]=useState('');
    const [detail,setDetail]=useState('');
    const [date,setDate]=useState('');
    const [type,setType]=useState('');
    const handleSubmit= (e) =>{
        e.preventDefault();
        if(type==='โปรดเลือกประเภท'||type===''){
            alert("กรุณาเลือกประเภทงาน");
        }
        else{
        submitForm(e,course,workName,detail,date,type)
        setCourse('');setWorkName('');setDetail('');setDate('');}
    }
    

    return(
        <>
            <form class={styles['form-container']} onSubmit={handleSubmit}>
                <div class={styles['insideForm']}>
                    <h2 class={styles['head']} style={{marginTop:"0px"}}>โปรดเพิ่มงานที่คุณต้องการ</h2>
                    <label >
                        ชื่อวิชา/รหัสวิชา:<br/>
                        <input className={styles['ip']} type="text" value={course} onChange={(e)=>{setCourse(e.target.value);}} required/>
                    </label><br/>
                    <br/>
                    <label>
                        ชื่องาน:<br/>
                        <input className={styles['ip']} type="text" value={workName} onChange={(e)=>{setWorkName(e.target.value);}} required/>
                    </label><br/>
                    <br/>
                    <label>
                        รายละเอียดงาน:<br/>
                        <textarea className={styles['detail']} type="detail" value={detail} onChange={(e)=>{setDetail(e.target.value);}}/>
                    </label><br/>
                    <br/>
                    <label>
                        วันที่ต้องส่ง:<br/>
                        <input className={styles['ip']} type="date" value={date} onChange={(e)=>{setDate(e.target.value);}} required/>
                    </label><br/>
                    <br/>
                    <label>
                        รูปแบบงาน:
                        <br/>
                        <select className={styles['type']} onChange={(e)=>{setType(e.target.value)}}>
                            <option value="โปรดเลือกประเภท">โปรดเลือกประเภท</option>
                            <option value="งาน">งาน</option>
                            <option value="ควิซ">ควิซ</option>
                            <option value="โปรเจค">โปรเจค</option>
                        </select>
                    </label><br/>
                    <label><input className={styles['submitbtn']} type="submit" name="Submit" value="บันทึก"/></label>
                </div>
            </form>
        </>
    )
}
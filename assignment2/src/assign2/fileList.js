import React from "react";
import './App.css'
    function FileList({worked}){
        console.log(worked)
    return(
        <>
        {worked.map((ele,index)=>{
            return(<>
                <ul key={index}>
                <div className="block-holder"></div>
                <div className="box">
                  <div className="fontCen">
                  <li className="fontT">{ele.workName}</li>
                  <div>Subject: {ele.course}  |   Due Date: {ele.date}</div>
                  <div>Detail: {ele.detail}</div>
                  <div>Type of Work: {ele.type}</div>
                   
                  </div>  
                </div>
                </ul></>
            );
        })}
        
        
        </>
    );

}
    
export default FileList;

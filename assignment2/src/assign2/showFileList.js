import "../App.css";
import React,{useState}from 'react';
import FileList from "./fileList";
function showFileList({worked}){
  console.log(worked)
  return (
   <div>
       <h1 className="topic">Your History List</h1>
       <FileList worked={worked}/>
       
   </div>
);
}


export default showFileList;
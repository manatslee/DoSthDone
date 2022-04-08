//import logo from './logo.svg';
import "./App.css";
import React,{useState}from 'react';
//import Message from'./Message.js'
//import OutMessage from './outMessage.js';
//import ListItem from './listItem.js'
//import MyButton from './MyButton.js';
import BtnStopWatch from './BtnStopWatch';
import StopWatchTimer from './StopWatchTimer';
// import FileList from "./fileList";
function App(){
  
  const[time,setTime]=useState({ms:0,s:0,m:0,h:0});
  const[interv,setInterv]=useState();
  const[status,setStatus]=useState(0);

  const start=()=> {
    count();
    setStatus(1);
    setInterv(setInterval(count,10));
    console.log("Timer is Start");
  };
  var updateMinsec = time.ms, updateSec = time.s, updateMin = time.m, updateHour = time.h;

  const count=()=>{
    if(updateMin===60){
      updateHour++;
      updateMin=0;
    }
    if(updateSec===60){
      updateMin++;
      updateSec=0;
    }
    if(updateMinsec===100){
      updateSec++;
      updateMinsec=0;
    }
    updateMinsec++;
    return setTime({ms:updateMinsec,s:updateSec,m:updateMin,h:updateHour});
  };

  const stop=()=>{
    clearInterval(interv);
    setStatus(2);
    console.log("Timer is Stop")
  };

  const reset=()=>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0,s:0,m:0,h:0})
    console.log("Timer is reset")
  };

  const resume=()=>start();
  

  return (
    <div>
    <h1 className="topic">Timer</h1>
      <div className="main-section">
          <div className="clock-holder">
              <div className="stopwatch">
                <StopWatchTimer time={time}/>
                <BtnStopWatch status={status} resume={resume} reset={reset} stop={stop}start={start}/>
              </div>
          </div>
      </div>
   </div>
);
}

export default App;

import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
   const [time,setTime] = useState(0);
   const [isActive,setIsActive]=useState(false);
   const intervalRef = useRef(null);

const formatTime=(time)=>{
   const minutes = Math.floor(time/60) ;
   const seconds = time % 60;
   return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

const handleStart=()=>{
if(!isActive){
setIsActive(true);
intervalRef.current = setInterval(()=>{
setTime((prevTime) => prevTime+1);
},1000);
}
};

const handlePause=()=>{
    if(isActive){
        clearInterval(intervalRef.current);
        setIsActive(false);
    }
};

const handleReset=()=>{
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTime(0);
};

useEffect(()=>{
return ()=>clearInterval(intervalRef.current);
},[]);

  return (
    <div>
        <h1>StopWatch</h1>
        <div>{formatTime(time)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch

import {  useEffect, useState } from 'react';
import './App.css';
import Timer from './com/Timer';

function App() {
  const [time,settime] = useState(0)
  const [start,setstart] = useState(false)

  useEffect(() => {
    let timer

    if(start){
     timer = setInterval(() => {
        settime((prev) => prev + 10)
      }, 10);
    } else {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  },[start])

  const starttime = () => {
    setstart(prev => !prev)
  }

  const reset = () => {
    settime(0)
    setstart(false)
  }

  const stoptimer = () => {
    setstart(false)
  }

  return (
    <div className="App">
      <Timer time={time}/>
      <button onClick={starttime}>start</button>
      <button onClick={stoptimer}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;

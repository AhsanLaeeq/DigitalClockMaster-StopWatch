import React, { useEffect,useState } from "react";
import "./Hero.css";




const Hero = () => {


  const [time, setTime] = useState(new Date());
  const [show, setshow] = useState(false)

useEffect(() => {

  const interval=setInterval(()=>setTime(new Date()),1000);

  return () =>clearInterval (interval);
},[])

const formatTime=(date)=>{
    return date.toLocaleTimeString();

}

const tshow=()=>{
    setshow(true);
}

const [second, setsecond] = useState(0);
const [running, setrunning] = useState(false);

useEffect(() => {
  let timer;
  if(running){
    timer=setInterval(() => {
        setsecond((prev)=>prev+1);
        
    }, 1000);
  }

  return () => clearInterval(timer);
}, [running])

const ormatTime=(totalSecond)=>{

    const h=Math.floor(totalSecond/3600).toString().padStart(2,"0");
    const m =Math.floor((totalSecond%3600)/60).toString().padStart(2,"0");
    const s =(totalSecond%60).toString().padStart(2,"0");
    return `${h}:${m}:${s}`;

};





  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">⏰ Digital Clock & Timer</h1>
        <p className="hero-subtitle">Track time effortlessly — Stay sharp, stay on time!</p>
        {show && <h2 className="hero-title">{formatTime(time)}</h2>}
        <div className="hero-buttons">
          <button className="hero-btn" onClick={tshow}>Show Clock</button>
          <button className="hero-btn" onClick={()=>setrunning(true)}>Start Timer</button>
          <button className="hero-btn" onClick={()=> setrunning(false)}>Pause</button>
          <button className="hero-btn" onClick={()=>{setrunning(false);setsecond(0)}}>Reset Timer</button>
          <h2 className="hero-title">{ormatTime(second)}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

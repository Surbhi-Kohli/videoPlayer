import React ,{useState,useEffect,useRef} from "react";
import firebase from "../firestore";
import classes from "./Video.module.css";
import images from "../assets/dashboard2.png";
import forwardBtn from  "../assets/forward.png";
import rewindButton from "../assets/back.png";
import rpmIcon from "../assets/rpmIcon.png";
import {useSelector,useDispatch} from 'react-redux';
import Chart from "./Chart";
import audio from "../assets/audio.png";


 const Video=(props)=>{
     const videoRef = useRef();
     const progressRef=useRef();
     const  [icon,setIcon]=useState('►');
     const  [progressWidth,setProgressWidth]=useState(0.1);
     const dispatch=useDispatch();
     const data=useSelector((state)=>state.data);
     const rpm=useSelector((state)=>state.rpm);
     const mph=useSelector((state)=>state.mph);

     useEffect(()=>{
       function registerAListener(){
        videoRef.current.addEventListener('timeupdate',handleChange);
       }
       registerAListener();
       return ()=>{ if(videoRef && videoRef.current)videoRef.current.removeEventListener('timeupdate',handleChange);}
     },[data,mph,rpm]);
 
     useEffect(()=>{
      const db = firebase.firestore();
     fetch('https://videoanalytics-server.herokuapp.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
       query {
         data {
           rpm
           mph
           timeLowerLimit
           timeUpperLimit    
          }
      }` 
  }),
})
 .then(res => res.json())
.then(res => {console.log(res.data.data);

 dispatch({type:'add',val:res.data.data})
});
     },[]);

     const handleChange=()=>{
        
       let width=(videoRef.current.currentTime/videoRef.current.duration)*100;
       setProgressWidth(width);
       let time=videoRef.current.currentTime/60;
    
       data.map(entry=>{
     
        if(time<entry.timeUpperLimit && time>entry.timeLowerLimit)
        {  
          dispatch({type:'changeMph',val:entry.mph})
          dispatch({type:'changeRpm',val:entry.rpm});
        }
      });    
       if(width==100)
       { 
        resetVideoStatus();
       }
     }

     const toggle=()=>{
        
        if(videoRef.current.paused)
        {
           setIcon('❚❚');
           videoRef.current.play();
        }
       
        else {
           setIcon('►')
           videoRef.current.pause();
        }
     }
     const resetVideoStatus=()=>{
       videoRef.current.pause();
       setProgressWidth(0.5);
       setIcon('►');
       dispatch({type:'changeMph',val:"0"})
       dispatch({type:'changeRpm',val:"0"});
     }
     const progressChange=(e)=>{
        const scrubTime=(e.nativeEvent.offsetX/progressRef.current.offsetWidth)*videoRef.current.duration;
      //  console.log("scrubTime is "+scrubTime);
        videoRef.current.currentTime=scrubTime;                                                                       
     }
     const sliderHandler=(event)=>{
      let prop=event.target.name;
      videoRef.current[prop]=event.target.value;
     }

     const skipVideo=(event)=>{
      
      videoRef.current.currentTime+=parseFloat(event.currentTarget.dataset.skip);  
     }
     return (
       <div className={classes.player}>
         <video
          data-test="tag-video"
           className={classes.player__video}
           ref={videoRef}
           onClick={toggle}
           src={props.src}
           type="video/mp4"
         />
      
         <div className={classes.dynamicControls}>
           <div className={classes.mph}>
          <img src={images} style={{width:'40px',height:'40px'}}/>
          <span>{mph}</span>
           </div>
           <div className={classes.mph}>
           <img src={rpmIcon} style={{width:'40px',height:'40px'}}/>
            <span data-test="rpm">{rpm}</span>
           </div>
         </div>
         <div className={classes.player__controls}>
           {/* <div
             data-test="progress"
             className={classes.progress}
             ref={progressRef}
             onClick={progressChange}
           >
             <div
             data-test="progressFilled"
               className={classes.progress__filled}
               style={{ flexBasis: `${progressWidth}%` }}
             ></div>
           </div> */}
           <div className={classes.controlButtons} >
            <div className={classes.controlCapsule}>
             <button
               data-skip="-10"
               className={classes.icon}
               onClick={skipVideo}
             >
               <img src={rewindButton} style={{width:'29px',height:'32px',backgroundColor:'lightgray',borderRadius:'5px'}}/>
             </button>
             <button
               className={classes.player__button}
               onClick={toggle}
               title="Toggle Play"
             >
               {icon}
             </button>
             <button
               data-skip="25"
               className={classes.icon}
               onClick={skipVideo}
             >
               <img src={forwardBtn} style={{width:'29px',height:'32px',backgroundColor:'lightgray',borderRadius:'5px'}}/>
             </button>
             </div>
             <div style={{display:'flex',alignItems:'center'}}>
             {/* <input
               type="range"
               name="playbackRate"
               className="player__slider"
               min="0.5"
               max="2"
               step="0.1"
               onChange={sliderHandler}
             /> */}
             <img src={audio} style={{width:'25px',height:'25px'}}/>
             <input
               type="range"
               name="volume"
               className="player__slider"
               min="0"
               max="1"
               step="0.05"
               onChange={sliderHandler}
             />
              
             </div>
           </div>
           
         </div>
         <div className={classes.chart}>
         <div
             data-test="progress"
             className={classes.progress}
             ref={progressRef}
             onClick={progressChange}
           >
             <div
             data-test="progressFilled"
               className={classes.progress__filled}
               style={{ flexBasis:`${progressWidth}%` }}
             ></div>
           </div>
          <Chart time={videoRef.current?Math.ceil(videoRef.current.currentTime/60):0}/>
       </div>
       </div>
     );
 }
 export default Video;
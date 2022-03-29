import React, { useEffect, useRef, useState } from 'react'

import first_video from "../../assets/first_video.mp4"
import second_video from "../../assets/second_video.m4v"
import first_video_mobile from "../../assets/first_video_mobile.m4v"
import second_video_mobile from "../../assets/second_video_mobile.m4v"

import Preloader from "../preloader"
import Panel from "../panel"

const Index = () => {

  const firstVideoRef = useRef()
  const secondVideoRef = useRef()
  const screenWidth = window.screen.width
  const [soundStatus, setSoundStatus] = useState(false)
  const [panelStatus, setPanelStatus] = useState(false)

  useEffect(() => {
    if (soundStatus) {
      firstVideoRef.current.muted = false
      secondVideoRef.current.muted = false
    } else {
      firstVideoRef.current.muted = true
      secondVideoRef.current.muted = true
    }
  }, [soundStatus])

  const playSecondVideo = () => {
    firstVideoRef.current.classList.remove("playing")
    secondVideoRef.current.classList.add("playing")
    secondVideoRef.current.play()
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      firstVideoRef.current.play()
    }, 3500)

    return () => {
      clearTimeout(timer)
    }
  }, [screenWidth])

  return (
    <div className="home container-fluid">
      <Preloader />
      <button className="sound-btn" onClick={() => setSoundStatus(!soundStatus)}> {soundStatus ? "SOUND ON" : "SOUND OFF"} </button>
      <video className='bgVid playing' ref={firstVideoRef} onEnded={() => playSecondVideo()}>
        <source src={screenWidth > 730 ? first_video : first_video_mobile} type='video/mp4' />
      </video>
      <video className='bgVid second' ref={secondVideoRef} muted loop onPlay={() => setPanelStatus(true)}>
        <source src={screenWidth > 730 ? second_video : second_video_mobile} type='video/mp4' />
      </video>
      <Panel showed={panelStatus} />
    </div>
  );
};

export default Index;
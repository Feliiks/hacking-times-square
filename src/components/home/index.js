import React, { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

import first_video from "../../assets/first_video.mp4"
import second_video from "../../assets/second_video.m4v"
import first_video_mobile from "../../assets/first_video_mobile.m4v"
import second_video_mobile from "../../assets/second_video_mobile.m4v"

import Preloader from "../preloader"

const Index = () => {

  const firstVideoRef = useRef()
  const secondVideoRef = useRef()
  const screenWidth = window.screen.width

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
      <video className='bgVid playing' ref={firstVideoRef} muted onEnded={() => playSecondVideo()}>
        <source src={screenWidth > 730 ? first_video : first_video_mobile} type='video/mp4' />
      </video>
      <video className='bgVid' ref={secondVideoRef} muted loop>
        <source src={screenWidth > 730 ? second_video : second_video_mobile} type='video/mp4' />
      </video>
    </div>
  );
};

export default Index;
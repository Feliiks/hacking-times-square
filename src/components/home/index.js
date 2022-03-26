import React, { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

import first_video from "../../assets/first_video.mp4"
import second_video from "../../assets/second_video.m4v"

import Preloader from "../preloader"

const Index = () => {

  const videoRef = useRef()

  useEffect(() => {
    let timer = setTimeout(() => {
      videoRef.current.play()
    }, 3500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="home container-fluid">
      <Preloader />
      <video className='bgVid' width="100%" muted ref={videoRef}>
        <source src={first_video} type='video/mp4' />
      </video>
    </div>
  );
};

export default Index;
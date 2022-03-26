import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'

import Loading from "../../assets/loading.gif"

const Index = () => {
  const preloaderRef = useRef()

  useEffect(() => {
    let timer = setTimeout(() => {
      preloaderRef.current.style.display = 'none'
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-inner">
        <img src={Loading} alt="loading" />
        <div className="progress-bar">
          <div className="inner" />
        </div>
        <CountUp className="counter" end={100} duration={3.5} delay={0.5} suffix="%" />
      </div>
    </div>
  )
}

export default Index
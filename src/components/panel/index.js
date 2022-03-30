import React, { useState } from 'react'

import Danger from '../../assets/danger.png'
import Counter from '../../assets/counter.png'
import Logo from '../../assets/logo.png'

const Index = ({ showed }) => {
  const [details, setDetails] = useState(false)
  const [hack, setHack] = useState(false)

  return (
    <div className={showed ? "panel col-xl-5 showed" : "panel col-5"}>
      <div className="header">
        <span> HACKING TIMES SQUARE </span>
        <div className="little-buttons">
          <div className="item" />
          <div className="item" />
          <div className="item" />
        </div>
      </div>
      <div className="content">
        <img className="danger" src={Danger} alt="danger"/>
        <h1> WARNING! <br/> HACKING BEGINS IN </h1>
        <img className="counter" src={Counter} alt="counter"/>
        <div className="buttons">
          <button onClick={() => setDetails(true)}> DETAILS </button>
          <button onClick={() => setHack(true)}> HACK </button>
        </div>
        <div className={details ? 'details showed' : 'details'}>
          <div className="header">
            <span> DETAILS </span>
            <div className="little-buttons">
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
          </div>
          <div className="content">
            <img className="logo" src={Logo} alt="logo"/>
            <h2> Brain in a Vat </h2>
            <div className="text-content">
              <p>
                We are a group dedicated to disrupting the current web3 and NFT
                market. We would like to bring the digital world of web3 to have a
                positive impact on the physical world. The web3 world may seem
                distant, although parallel, from the web2 and physical world, but
                we’d like to connect the two by creating one of the world’s
                biggest interactive web3 art forms… Let’s start by Hacking Times
                Square.. Will you Join us? We are a group dedicated to disrupting
                the current web3 and NFT market. We would like to bring the
                digital world of web3 to have a positive impact on the physical
                world. The web3 world may seem distant, although parallel, from
                the web2 and physical world, but we’d like to connect the two by
                creating one of the world’s biggest interactive web3 art forms…
                Let’s start by Hacking Times Square.. Will you Join us?
              </p>
            </div>
            <button onClick={() => setDetails(false)}> BACK</button>
          </div>
        </div>
        <div className={hack ? 'hack showed' : 'hack'}>
          <div className="header">
            <span> HACK </span>
            <div className="little-buttons">
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
          </div>
          <div className="content">
            <img className="logo" src={Logo} alt="logo"/>
            <h2> Brain in a Vat </h2>
            <div className="text-content">
              <p>
                We are a group dedicated to disrupting the current web3 and NFT
                market. We would like to bring the digital world of web3 to have a
                positive impact on the physical world. The web3 world may seem
                distant, although parallel, from the web2 and physical world, but
                we’d like to connect the two by creating one of the world’s
                biggest interactive web3 art forms… Let’s start by Hacking Times
                Square.. Will you Join us? We are a group dedicated to disrupting
                the current web3 and NFT market. We would like to bring the
                digital world of web3 to have a positive impact on the physical
                world. The web3 world may seem distant, although parallel, from
                the web2 and physical world, but we’d like to connect the two by
                creating one of the world’s biggest interactive web3 art forms…
                Let’s start by Hacking Times Square.. Will you Join us?
              </p>
            </div>
            <button onClick={() => setHack(false)}> BACK </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
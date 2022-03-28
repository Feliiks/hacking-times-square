import React, { useState } from 'react'

const Index = () => {
  const [details, setDetails] = useState(false)
  const [hack, setHack] = useState(false)
  return (
    <div className="panel col-5">
      <div className="header">
        <span> HACKING TIMES SQUARE </span>
      </div>
      <div className="content">
        <span> IMAGE </span>
        <h1> WARNING !</h1>
        <h1> HACKING BEGINS IN </h1>
        <span> COUNTER </span>
        <div>
          <button onClick={() => setDetails(true)}> DETAILS </button>
          <button onClick={() => setHack(true)}> HACK </button>
        </div>
        <div className={details ? "details showed" : "details"}>
          <div className="header">
            <span> DETAILS </span>
          </div>
          <div className="content">
            <span> IMAGE </span>
            <h2> Brain in a Vat </h2>
            <p> Texte</p>
            <button onClick={() => setDetails(false)}> BACK </button>
          </div>
        </div>
        <div className={hack ? "hack showed" : "hack"}>
          <div className="header">
            <span> HACK </span>
          </div>
          <div className="content">
            <span> IMAGE </span>
            <h2> Brain in a Vat </h2>
            <p> Texte</p>
            <button onClick={() => setHack(false)}> BACK </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
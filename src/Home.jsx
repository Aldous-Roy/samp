import React from 'react'

// import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>This is a home</h1>
        <h2>Updated the home</h2>
        <button onClick={() => console.log("About")}>about</button>
    </div>
  )
}

export default Home
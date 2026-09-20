import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const About = () => {
  return (
<>    
 <h1> my name is </h1>
    <TypeAnimation
        sequence={[
          "I am  A  MERN Stack Developer",
          1000,
          "I am  A React Developer",
          1000,
          "I am  A Full Stack Developer",
          1000,
          "I am  A JavaScript Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        style={{
          fontSize: "2em",
          display: "inline-block",
          color: "Red",
        }}
      />



    <div id='mdiv'>
<h1>this is a mern full stack</h1>

      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
      <div id="main"></div>
    </div>

    </>

  )
}

export default About
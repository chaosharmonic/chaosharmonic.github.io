import React from 'react'

const publicUrl = process.env.PUBLIC_URL
const blazer = `${publicUrl}/assets/blazer.jpg`

const whoIs = 'I\'m a trained musician, turned one-man tech support desk, turned self-taught JavaScript developer. I have a working understanding of MERN-stack libraries and a solid Vanilla JS foundation, along with a passing familiarity with Vue via some personal projects.'
const forFun = 'In my free time, I\'m typically working out, gaming, both (let\'s DDR!), or tinkering with experiments ranging from automating my lights to DIY cocktails.'

const altSnark = 'Also, I have anime hair.'

const About = () => (
  <>
    <h2 id='aboutHeader'>About me:</h2>
    <div className='container'>
      <div id='headShot'>
        <img src={blazer} alt={altSnark} />
      </div>
      <div id='aboutText'>
        <p>{whoIs}</p>
        <p>{forFun}</p>
      </div>
    </div>
  </>
)

export default About

import React from 'react'
import { Section, Content, Title } from 'rbx'

const whoIs = 'I\'m a trained musician, turned one-man tech support desk, turned self-taught JavaScript developer. I mostly work with MERN-stack libraries, occasionally dabbling in Vue.'
const forFun = 'In my free time, I\'m typically working out, gaming, both (let\'s DDR!), or tinkering with an experiments or five - with previous ones ranging from automated lights to DIY cocktails.'

const About = () => (
  <Section id='main'>
    <Title id='portfolioHeader'>Here's a little about me:</Title>
    <Content>
      <p>{whoIs}</p>
      <p>{forFun}</p>
    </Content>
  </Section>
)

export default About

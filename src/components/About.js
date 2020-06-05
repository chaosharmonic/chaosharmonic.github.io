import React from 'react'
import { Section, Content, Title } from 'rbx'

const bio = [
  'I\'m a trained musician, turned one-man tech support desk, turned self-taught JavaScript developer. I mostly work with MERN-stack libraries (with some occasional dabblings in Vue), but have built a career on picking up new skillsets to solve the problems in front of me - whether that\'s streamlining POS deployments across a restaurant chain or picking apart Express routes in order to fix a UI.',
  'In my free time, I\'m typically working out, gaming, shouting from the Internet rooftops about the need for a modern spec, or toying with an experiment or five. Some previous endeavors have included building and automating RGB lighting, code as music, cardio via DDR, and DIY cocktails.'
].map((paragraph, key) => <p key={key}>{paragraph}</p>)

const About = () => (
  <Section id='main' backgroundColor='black'>
    <Title>Here's a little about me:</Title>
    <Content>
      {bio}
    </Content>
  </Section>
)

export default About

import React from 'react'
import { Section, Content, Title } from 'rbx'

const bio = [
  'I\'m a trained musician, turned one-man IT support desk, turned self-taught JavaScript developer. Since parlaying my tinkering habit into a profession, I\'ve built up a career on picking up new skillsets to solve the problems in front of me - ranging from streamlining POS deployments across a restaurant chain, to moving my entire workplace off BYOD, to picking apart Express routes in order to fix data flowing into a React app.',
  'In my free time, I\'m typically working out, gaming, shouting from the Internet rooftops that chat needs a spec, or toying with an experiment or five. Some previous endeavors have included wiring and automating my own RGB lighting, fixing up a DDR pad just so that I could avoid going running, and perrennial attempts to finally nail down a free-standing handstand.'
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

import React from 'react'
import { Hero, Image, Title } from 'rbx'

const publicUrl = process.env.PUBLIC_URL
const profile = `${publicUrl}/assets/profile.jpg`

const Splash = () => (
  <>
    <Hero
      size='fullheight-with-navbar'
      id='hero'
    >
      <Hero.Body>
        <Image.Container>
          <Image
            rounded
            id='profile'
            src={profile}
          />
        </Image.Container>
        <Title>Hey there! I'm Sean, and I write code.</Title>
      </Hero.Body>
    </Hero>
  </>
)

export default Splash

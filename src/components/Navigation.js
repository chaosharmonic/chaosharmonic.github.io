import React from 'react'
import { Button, Navbar, Icon } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faFreeCodeCamp, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faFreeCodeCamp, faCodepen, faLinkedin, faEnvelope)
const sections = ['home', 'about', 'projects', 'built with']

const contactInfo = [
  { link: 'https://github.com/chaosharmonic', description: 'Github', icon: faGithub },
  { link: 'https://www.freecodecamp.org/chaosharmonic', description: 'FreeCodeCamp', icon: faFreeCodeCamp },
  { link: 'https://codepen.io/chaosharmonic', description: 'CodePen', icon: faCodepen },
  { link: 'https://www.linkedin.com/in/smmorrissey', description: 'LinkedIn', icon: faLinkedin },
  { link: 'mailto:chaosharmonic@gmail.com', description: 'Email', icon: faEnvelope }
]

const constructContactIcon = ({ link, description, icon }) => (
  <Navbar.Item href={link}>
    <Icon
      color='link'
      size='large'
    >
      <FontAwesomeIcon icon={icon} />
    </Icon>
  </Navbar.Item>
)
const contactIcons = contactInfo.map(link => constructContactIcon(link))

const Navigation = ({ setCurrentView }) => {
  const handleClick = (event) => {
    setCurrentView(event.target.value)
  }

  const constructSectionButton = section => (
    <Button
      color='link'
      outlined
      value={section}
      onClick={handleClick}
    >
      {section}
    </Button>
  )
  const sectionLinks = sections.map(section => constructSectionButton(section))

  return (
    <Navbar fixed='bottom'>
      <Navbar.Brand>
        {contactIcons}
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Segment align='end'>
        <Navbar.Menu>
          <Button.Group>{sectionLinks}</Button.Group>
        </Navbar.Menu>
      </Navbar.Segment>
    </Navbar>
  )
}

export default Navigation

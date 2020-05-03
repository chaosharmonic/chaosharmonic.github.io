import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faFreeCodeCamp, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faFreeCodeCamp, faCodepen, faLinkedin, faEnvelope)
const sections = ['about', 'projects']

const contactInfo = [
  { link: 'https://github.com/chaosharmonic', description: 'Github', icon: faGithub },
  { link: 'https://www.freecodecamp.org/chaosharmonic', description: 'FreeCodeCamp', icon: faFreeCodeCamp },
  { link: 'https://codepen.io/chaosharmonic', description: 'CodePen', icon: faCodepen },
  { link: 'https://www.linkedin.com/in/smmorrissey', description: 'LinkedIn', icon: faLinkedin },
  { link: 'mailto:chaosharmonic@gmail.com', description: 'Email', icon: faEnvelope }
]

const constructContactIcon = ({ link, description, icon }) => (
  <a href={link}><FontAwesomeIcon icon={icon} className='icons' /></a>
)
const contactIcons = contactInfo.map(link => constructContactIcon(link))

const Header = ({ setCurrentView }) => {
  const handleClick = (event) => {
    setCurrentView(event.target.value)
  }

  const constructSectionButton = section => (
    <button
      value={section}
      onClick={handleClick}
    >
      {section}
    </button>
  )
  const sectionLinks = sections.map(section => constructSectionButton(section))

  return (
    <nav>
      <div className='header'>{contactIcons}</div>
      <div className='header'>{sectionLinks}</div>
    </nav>
  )
}

export default Header

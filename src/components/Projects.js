import React from 'react'
import { Card, Image, Column, Content, Section, Title } from 'rbx'

const baseUrl = 'https://chaosharmonic.github.io'
const projects = [
  { path: 'negotiable', text: 'Negotiable' },
  { path: 't3', text: 'Tic Tac Toe' },
  { path: 'simon', text: 'Simon' },
  { path: 'calc', text: 'Calculator' },
  { path: 'weather', text: 'Local Weather' },
  { path: 'pilgrim', text: 'Pilgrim Ipsum', url: 'https://pilgrimipsum.com/' }
]

const createColumn = (project) => {
  const { text, url, path } = project

  const link = url || `${baseUrl}/${path}`

  const asset = `../assets/${path}.png`

  return (
    <Column size={4}>
      <Card>
        <Card.Image>
          <a href={link}>
            <Image src={asset} />
          </a>
        </Card.Image>
        <Card.Content>
          <a href={link}>
            {text}
          </a>
        </Card.Content>
      </Card>
    </Column>
  )
}

const columns = projects.map(project => createColumn(project))

const Projects = () => (
  <Section id='main' backgroundColor='black'>
    <Content>
      <Title id='portfolioHeader'>Here's some work I've done:</Title>
    </Content>
    <Column.Group multiline>
      {columns}
    </Column.Group>
  </Section>
)

export default Projects

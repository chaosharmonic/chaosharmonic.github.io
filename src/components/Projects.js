import React from 'react'
import { Card, Image, Column, Content, Section, Title } from 'rbx'

const projects = [
  {
    path: 'step-step-recollection',
    title: 'Step Step Recollection',
    description: 'A CRUD application and workout tracker for DDR. (Work in progress.) Built using React, Express, and MongoDB. Seeded using Deno.'
  },
  {
    path: 'negotiable',
    title: 'Negotiable',
    description: 'A bar chart for comparing boilerplate salaries. Built using Vue and SVG.'
  },
  {
    path: 't3',
    title: 'Tic Tac Toe',
    description: 'A simple tic tac toe game. Built using vanilla JS.'
  },
  {
    path: 'calc',
    title: 'Calculator',
    description: 'A simple calculator. Built using vanilla JS.'
  }
]

const createColumn = ({ title, description, path }) => {
  const link = `https://${path}.bhmt.dev/`

  const asset = `../assets/${path}.png`

  return (
    <Column size={6}>
      <Card>
        <Card.Image>
          <a href={link}>
            <Image src={asset} />
          </a>
        </Card.Image>
        <Card.Content>
          <a href={link}>
            {title}
          </a>
          <p>{description}</p>
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

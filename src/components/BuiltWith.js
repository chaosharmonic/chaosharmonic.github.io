import React from 'react'
import { Section, Content, Title } from 'rbx'

const generateCategory = (category, technologies) => ({ category, technologies })

const stack = [
  generateCategory('Component Libraries', ['React*', 'Vue']),
  generateCategory('State Management', ['Redux', 'Context']),
  generateCategory('Design Systems', ['Material UI', 'antd', 'RBX*']),
  generateCategory('Grid Systems', ['Bootstrap', 'Bulma*', 'Flexbox']),
  generateCategory('Misc UI libraries', ['Font Awesome', 'Styled Components', 'jQuery']),
  generateCategory('Utility libraries', ['Lodash', 'Moment', 'date-fns']),
  generateCategory('Backend', ['MongoDB', 'Express'])
].map((item, key) => (
  <li key={key}>
    <strong>{item.category}</strong>: {item.technologies.reduce((x, y) => `${x}, ${y}`)}
  </li>
))

const BuiltWith = () => (
  <Section id='main' backgroundColor='black'>
    <Title>Technologies used </Title>
    <Content>
      <ul>{stack}</ul>
      <span>* used on this site</span>
    </Content>
    <Title>Attributions</Title>
    <Content>
      <ul>
        <li>Background generated using <a href='https://www.heropatterns.com/'>Hero Patterns</a> (CC BY 4.0)</li>
        <li>Themed using <a href='https://jenil.github.io/bulmaswatch//'>Bulmaswatch</a> (MIT license)</li>
      </ul>
    </Content>
  </Section>
)

export default BuiltWith

// asset credits:

// background from Hero Patterns*

// * used on this site

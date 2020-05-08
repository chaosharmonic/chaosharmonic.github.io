import React from 'react'

const baseUrl = 'https://chaosharmonic.github.io'
const projects = [
  { path: 't3', text: 'Tic Tac Toe' },
  { path: 'calc', text: 'Calculator' },
  { path: 'simon', text: 'Simon' },
  { path: 'weather', text: 'Local Weather' },
  { path: 'negotiable', text: 'Negotiable' },
  { path: 'pilgrim', text: 'Pilgrim Ipsum', url: 'https://pilgrimipsum.com/' }
]

const createColumn = (project) => {
  const { text, url, path } = project

  const link = url || `${baseUrl}/${path}`

  const asset = `../assets/${path}.png`

  return (
    <div className='card'>
      <a href={link}>
        <img src={asset} />{text}
      </a>
    </div>
  )
}

const columns = projects.map(project => createColumn(project))

const Projects = () => (
  <>
    <h3 id='portfolioHeader'>Here are some projects I've worked on:</h3>
    <div className='container projects'>
      {columns}
    </div>
  </>
)

export default Projects

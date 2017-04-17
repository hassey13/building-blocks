import React from 'react'
import Block from '../components/Block'

const Project = (
  blocks
) => (
  <ul>
    { blocks.blocks.map( (block, i) => <Block key={i} {...block } /> ) }
  </ul>
)

export default Project

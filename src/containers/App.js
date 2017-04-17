import React, { Component } from 'react'

import CreatorTool from '../components/CreatorTool'
import Project from '../components/Project'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      blocks: [],
      creator: {
        color: 'black',
        size: 1
      }
    }
  }

  handleSubmit( event ) {
    event.preventDefault()
    this.setState( {
      blocks: [ ...this.state.blocks, this.state.creator ]
    })
  }

  handleChangeColor( event ) {
    this.setState( {
      creator: {
        color: event.target.value,
        size: this.state.creator.size
      }
    })
  }

  handleChangeSize( event ) {
    this.setState( {
      creator: {
        size: event.target.value,
        color: this.state.creator.color
      }
    })
  }

  render() {
    return (
      <div>
        <Project blocks={ this.state.blocks } />
        <CreatorTool
          state={ this.state }
          onSubmit={ this.handleSubmit.bind(this) }
          onChangeSize={ this.handleChangeSize.bind(this) }
          onChangeColor={ this.handleChangeColor.bind(this) } />
      </div>
    )
  }
}

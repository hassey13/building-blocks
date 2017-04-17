import React, { Component } from 'react'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      blocks: [],
      creator: {
        color: 'black',
        size: '1'
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
    const blocks = this.state.blocks
    return (
      <div>
        <div>
          <ul>
            { blocks.map( (block, i) => <li key={ i } className='block' style={ {backgroundColor: block.color, width: block.size * 50} } ></li> ) }
          </ul>
        </div>
        <div>
          <form onSubmit={ this.handleSubmit.bind(this) } >
            <label>Color: </label><input type='text' onChange={this.handleChangeColor.bind(this)} value={this.state.creator.color} />
            <label>Size:
              <select value={this.state.creator.size} onChange={this.handleChangeSize.bind(this)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
            </label>
            <button type='submit'>Create</button>
          </form>
        </div>
      </div>
    )
  }
}

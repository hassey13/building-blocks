import React from 'react'

const CreatorTool = ({
  state,
  onSubmit,
  onChangeSize,
  onChangeColor
}) => (
  <form onSubmit={ onSubmit } >
    <label>Color: </label><input type='text' onChange={ onChangeColor} value={state.creator.color} />
    <label>Size:
      <select value={state.creator.size} onChange={ onChangeSize }>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={4}>4</option>
        <option value={8}>8</option>
      </select>
    </label>
    <button type='submit'>Create</button>
  </form>
)

export default CreatorTool

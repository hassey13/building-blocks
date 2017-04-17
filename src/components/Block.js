import React from 'react'

const Block = ({
  color,
  size
}) => ( <li className='block' style={ {backgroundColor: color, width: size * 50} } ></li> )

export default Block

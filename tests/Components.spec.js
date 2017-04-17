import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import Block from '../src/components/Block'
import Project from '../src/components/Project'
import CreatorTool from '../src/components/CreatorTool'

const renderer = createRenderer()

describe('Block Component', () => {
  it('renders correct properties"', () => {
    let properties = {
      color: "black",
      size: "1"
    }
    renderer.render( <Block {...properties} /> )
    const actual = renderer.getRenderOutput().props.style
    const expected = { backgroundColor: 'black', width: 50 }
    expect( actual ).toEqual( expected )
  })
})

describe('Project Component', () => {
  it('renders blocks', () => {
    let blocks = [
      {
        color: "black",
        size: "1"
      },
      {
        color: "blue",
        size: "2"
      }
    ]
    renderer.render( <Project blocks={ blocks } /> )
    
    const childrenRender = renderer.getRenderOutput().props.children

    expect( childrenRender[0].type.name).toEqual( 'Block')
    expect( childrenRender[1].props ).toEqual( { color: 'blue', size: "2" } )
  })
})

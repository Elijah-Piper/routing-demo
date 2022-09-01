import React from 'react'
import Navbar from './Navbar'

const One = (props) => {
  return (
    <div>
        <Navbar/>
        <img src="https://picsum.photos/seed/picsum/500" />
        <h1>{ props.body }</h1>
    </div>
  )
}

export default One
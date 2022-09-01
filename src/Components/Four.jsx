import React from 'react'
import Navbar from './Navbar'

const Four = (props) => {
  return (
    <div>
        <Navbar/>
        <img src="https://picsum.photos/seed/picsum/500" />
        <h4>{ props.body }</h4>
    </div>
  )
}

export default Four
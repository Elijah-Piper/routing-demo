import React from 'react'
import Navbar from './Navbar'

const Two = (props) => {
  return (
    <div>
        <Navbar/>
        <img src="https://picsum.photos/seed/picsum/500" />
        <h2>{ props.body }</h2>
    </div>
  )
}

export default Two
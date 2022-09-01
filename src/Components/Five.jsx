import React from 'react'
import Navbar from './Navbar'

const Five = (props) => {
  return (
    <div>
        <Navbar/>
        <img src="https://picsum.photos/seed/picsum/500" />
        <h5>{ props.body }</h5>
    </div>
  )
}

export default Five
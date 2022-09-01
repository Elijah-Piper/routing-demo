import React from 'react'
import Navbar from './Navbar'

const Three = (props) => {
  return (
    <div>
        <Navbar/>
        <img src="https://picsum.photos/seed/picsum/500" />
        <h3>{ props.body }</h3>
    </div>
  )
}

export default Three
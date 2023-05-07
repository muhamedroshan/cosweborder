import React from 'react'

function NavConTainer(props) {
  return (
    <div className='fixed-bottom'>
        {props.children}
    </div>
  )
}

export default NavConTainer
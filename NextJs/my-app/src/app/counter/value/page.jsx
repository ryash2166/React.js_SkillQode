'use client'

import React from 'react'

const Value = (props) => {
  return (
    <div>
      <input type="text" value={props.counter} onChange={props.onChange} className='border-bule-500 border-2 ' placeholder='Title...'  />
    </div>
  )
}

export default Value

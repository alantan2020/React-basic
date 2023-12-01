import React from 'react'
import { useState } from 'react'

export default function App() {
  const [value,setValue ] = useState('')
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text" />
        


    </div>
  )
}

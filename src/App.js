import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>App

      <button onClick={handleClick}>count is {count}</button>
    </div>
  )
}


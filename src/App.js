import React from 'react'

export default function App() {
  // const clickHandler = () => {
  //   console.log('clicked button按钮点击了')
  // }

  // 事件传参
  // const clickHandler = (e) => {
  //   console.log('clicked button按钮点击了', e)
  // }

  // 传递自定义参数
  const clickHandler = (name, e) => {
    console.log( name , e, '=》点击了按钮')
  }
  return (
    <div>App
      {/* <button onClick={clickHandler}>按钮</button> */}
      <button onClick={(e) => clickHandler('令狐冲',e)}>按钮</button>
    </div>
  )
}

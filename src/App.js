import React from 'react'

const isLogin = false
export default function App() {
  return (
    <div>
      {/* 逻辑与 && */}
      {isLogin && <h1>登录成功</h1>}

      {/* 三元运算 */}
      {isLogin ? <h1>登录成功2</h1> : <h1>loading...</h1>}


    </div>
  )
}

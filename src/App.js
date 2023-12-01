import React from 'react'

const articleType = 2  //1 2 3 
function getArticleTem(){
  if (articleType === 1){
    return <div>我是无图模式，数字1</div>
  } else if (articleType === 2){
    return <div>我是二图模式，数字2</div>
  } else {
    return <div>我是有图模式，数字3</div>
  }
}
export default function App() {
  return (
    <div>
      <h1>
      {getArticleTem()}
      </h1>
          </div>
  )
}

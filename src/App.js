

function App() {
  const message = "Hea";
  const count = 100
  const list = [
    { id:1001,name:'张三'},
    { id:1002,name:'李四'},
    { id:1003,name:'王五'},
    { id:1004,name:'赵六'},
  ]
  function getName(){
    return "张三峰"
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox
      {message}
      {'this is message-tys'}
      </h1>
      {count}
      <h1>{getName()}</h1>

      {getName()}
      <div style={{color:'red'}}> this is div</div>
      <h1>

        <ul>
          {list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
        {/* {list.map(item => <li>{item.name}</li>)} */}
        {list.map(item => <li>aaa</li>)}
        {list.map(item => <li>{item.name}</li>)}
        {list.map(item => <li key={item.id}>{item.name}</li>)}
        
      </h1>
    

    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import { Todos } from './components/Todos';
import ForDelete from './components/ForDelete';

function App() {
  const array = []
  const [state,setState] = useState(array)

  function save(obj){
    setState((newArr)=>[...newArr,obj])
  }

  const delet = (id)=>{
    const arr = state.filter((e)=>{
      if (e.id !== id){
        return e
      }
    })
    setState(arr)
  }
  return (
    <div className="App">
      
    <Todos onSave={save}/>
    {state.map((e)=>{
      return <ForDelete onDelete={delet} key={e.id} name={e.name} id={e.id}/>

    })}
     
    </div>
  );
}

export default App;

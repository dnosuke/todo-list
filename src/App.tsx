import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Items';
import { ListItem } from './components/ListItem';
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'comprar pão', done: false },
    { id: 2, name: 'comprar bolo', done: false }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name:taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskDone = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id){
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  const handleDelete = (id: number) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id){
       let index = newList.indexOf(newList[i])
       newList.splice(index,1)
      }
    }
    setList(newList);
  }

  return (
    <div className="App">
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem key={index} item={item} done={handleTaskDone} del={handleDelete}/>
          ))}

        </C.Area>
      </C.Container>
    </div>
  );
}

export default App;

import './App.css';
import {Header} from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from'./components/ShowTask'
import { useEffect, useState } from 'react';

function App() {

  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklistKey")) || []); // hole ein exisiterende Liste aus einem Localstorage oder erstelle eine neue Liste
  const [clickexisted_task, setExistedTask] = useState({}); // ein leeres Objekt, repräsentiert den Zustand eines geklickten Tasks (hierfür wird ein ganzen task_objekt von showtask für das Editieren zugewiesen werden)

  useEffect( () => {
    localStorage.setItem("tasklistKey", JSON.stringify(tasklist));
  }, [tasklist]);

  return (

    <div className="App">
      <Header/>
      <AddTask tasklist={tasklist} setTasklist={setTasklist} clickexisted_task={clickexisted_task} setExistedTask={setExistedTask} /> {/*Drille die Liste als prop zum addieren drauf */}
      {/* {console.log(tasklist)} */}
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} clickexisted_task={clickexisted_task} setExistedTask={setExistedTask} /> {/*Drille die Liste als prop zur Anzeige in der Komponente ShowTask, die sich rerendert nachdem setten der neuen Liste */}
    </div>
    
  );
}

export default App;  
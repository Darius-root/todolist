import { useState } from 'react';
import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
const [newTask, setNewTask] = useState('');
const [error, setError] = useState(false);
  function addTask() {
    if (!newTask){;
    return setError(true); }
    setError(false);
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  const deleteTask = (task: number) => {
    setTasks(tasks.filter((_, index) => index !== task));
  };

  return (
    <>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Ma ToDo List</h1>
        <div className="flex mb-4">
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Ajouter une tâche" className="form-input flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <button onClick={addTask} className="bg-blue-500 text-white px-4 rounded-r-lg">Ajouter</button>
        </div>
        <span className="text-red-500" hidden={!error}>veillez saisir une tâche</span>

        <ul className="space-y-3">
        {tasks.map((task, index) => <ListTask key={index} task={{name:task,index:index}} delete={deleteTask} />)}
        </ul>
    </div> 
    </>
  )
}


interface ListTaskProps {
  task:{
    name:string;
    index:number;
  };
  delete: (index: number) => void;
}

function ListTask(props: ListTaskProps) {
  const deleteTask=()=>{
    props.delete(props.task.index);}
  return (
    <li className="tw-flex items-center justify-between p-2 border border-gray-200 rounded-lg">
        <span className='text-gray-700'>{props.task.name}</span>
        <button onClick={()=>deleteTask()} className="text-red-500 hover:text-red-700" >Supprimer</button>
    </li>
  )
}
export default App

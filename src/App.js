import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Rdv chez le Médecin',
        day: 'Le 5 février à 14h30',
        reminder: true   
    },
     {
        id: 2,
        text: 'Rdv à l\'école',
        day: 'Le 6 février à 17h30',
        reminder: true   
    },
    {
        id: 3,
        text: 'Rdv chez le Véterinaire',
        day: 'Le 8 février à 15h30',
        reminder: false   
    }
])

//Delete task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header title='Hello'/>
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;

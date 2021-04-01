import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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
        text: 'Rdv chez à l\'école',
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
  return (
    <div className="container">
      <Header title='Hello'/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

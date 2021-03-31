import Header from "./components/Header"
import Title from "./components/Title"
import Tasks from './components/Tasks'
import Advertisement from './components/Advertisement'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: '닮은동물사진1 + 설명',
      day: ' ... ',
      reminder: false
    },
    {
      id: 2,
      text: '닮은동물사진2 + 설명',
      day: ' ... ',
      reminder: false
    },
    {
      id: 3,
      text: '닮은동물사진3 + 설명',
      day: ' ... ',
      reminder: false
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  return (
    <div>
      <div>
        <Title />
      </div>
      <div>
        <Advertisement />
      </div>
      <div className="container">
        <Header />
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete=
          {deleteTask} onToggle={toggleReminder} />) : (' 결과창 ')}
      </div>

    </div>

  )
}

export default App

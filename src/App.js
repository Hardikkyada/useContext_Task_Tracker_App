import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hader from './componets/Hader';
import Tasks from './componets/Tasks';
import AddTask from './componets/AddTask';
import Footer from './componets/Footer';
import About from './componets/About';
import TaskProvider from './Context/TaskContext';

function App() {

  const [showAddTask, setshowAddTask] = useState(false)
  
  return (
    <Router>
      <div className='container'>

        <Hader title="Task Tracker"
          onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>

          <Route
            path='/'
            element={
              <>
              <TaskProvider>
                {showAddTask && <AddTask/>}
                <Tasks />
              </TaskProvider>
              </>
            } />

          <Route path='/about' element={<About />} />

        </Routes>
        <Footer />

      </div>

    </Router>
  )
}

export default App;

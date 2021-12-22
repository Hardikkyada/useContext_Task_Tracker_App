
import { useState, useEffect, useContext, createContext } from 'react'

export const TaskContext = createContext('');

//export const TaskContext = useContext();

//export var TaskContext;

const TaskProvider = (props) => {

    const [tasks, settasks] = useState([]);

    useEffect(() => {
        const gettasks = async () => {
            const taskfromserver = await fetchtask()
            settasks(taskfromserver)
        }
        gettasks()
    }, [])


    const fetchtask = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data;
    }

    const ftask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data;
    }

    //Addtask

    const addTask = async (task) => {

        const res = await
            fetch(`http://localhost:5000/tasks`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(task),
            })

        const data = await res.json()

        settasks([...tasks, data])

        /*  const id = Math.floor(Math.random() * 10000)+1
          const newtask = {id,...task}
          settasks([...tasks,newtask])*/

    }

    //delete task

    const deltask = async (id) => {

        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        //console.log('delete',id);
        settasks(tasks.filter((task) => task.id !== id))
    }



    //Toggle Remider

    const toremder = async (id) => {

        const oldtask = await ftask(id);

        //const uptask = { ...oldtask, text: "hello" }

        const uptask = { ...oldtask, remider: !oldtask.remider }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(uptask),
        })


        const data = await res.json();
        //settasks(tasks.map((t) => t.id === id ? { ...t, text: !data.text } : t))
        settasks(tasks.map((t) => t.id === id ? { ...t, remider: !data.remider } : t))
        //console.log(data);
    }



    return (
        <TaskContext.Provider value={{tasks,deltask,toremder,addTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}



export default TaskProvider;

import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
//import { AiFillEdit } from 'react-icons/ai';
import {TaskContext} from '../Context/TaskContext';


const Task = ({ task }) => {
    const {deltask,toremder} = useContext(TaskContext);
    return (
        <div className={`task ${task.remider ? 'remider' : ''}`} onDoubleClick={() => toremder(task.id)}>
            <h3>{task.text}{' '} <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => deltask(task.id)}
            /></h3>
            <p>{task.day}</p>
  

        </div>
    )
}

export default Task

import Task from "./Task";
import {TaskContext} from "../Context/TaskContext";
import {useContext} from "react";

const Tasks = () => {
    const { tasks } = useContext(TaskContext);
    return (
        <div>
            {tasks.length
                ? tasks.map((task) => {
                    return <Task task={task} key={task.id} />;
                })
                : "No Task"}
        </div>
    )
}

export default Tasks
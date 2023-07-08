import React, { useState, useEffect } from 'react'
import TaskService from '../services/task-service';

const TaskForm = (props) => {
    const [task, setTask] = useState({});
    const { id, onSave } = props;

    useEffect(() => {
        if (!id) return;
        const load = async () => {
            const task = await TaskService.getTask(id);
            setTask(task);
        }
        load();
    }, [id]);

    const handleChange = (event) => {
        setTask({ ...task, description: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.id) {
            TaskService.updateTask(props.id, task)
                .then(() => {
                    props.onSave();
                }).catch((error) => {
                    console.error(error);
                });
        } else {
            TaskService.createTask(task)
                .then(() => {
                    props.onSave();
                }).catch((error) => {
                    console.error(error);
                });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" placeholder="Task Description"
                onChange={handleChange} value={task.description ? task.description : ''} />

            <button type="submit">Save</button>
        </form>
    );
}

export default TaskForm;
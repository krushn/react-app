import { useContext } from 'react';
import { AppContext, removeTask,markDoneTask, markUnDoneTask } from '../State';
import './task.scss';

export default function Task({ index, task }) {

    const { dispatch } = useContext(AppContext)

    function deleteTask() {
      
        dispatch(removeTask({
            index: index
        }))
    }

    function doneTask() {
      
        dispatch(markDoneTask({
            index: index
        }))
    }
    
    function undoneTask() {
       
        dispatch(markUnDoneTask({
            index: index
        }))
    }

    return (
        <li>
            
            <b>{ task.title}</b>
            <p>{ task.description }</p>
            
            { task.status == 0 ? <button className='btn btn-sm btn-primary' onClick={doneTask}>Mark Done</button> :
                <button className='btn btn-sm btn-primary' onClick={undoneTask}>Mark Un-Done</button> }
            <button className='btn btn-sm btn-danger' onClick={deleteTask}>Delete</button>

        </li>
    );
}
import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    callback:(title:string)=>void
}

export function Todolist(props: PropsType) {
    const[title,setTitle]=useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    }
    const onClickHandler =()=>{
        props.callback(title)
        setTitle('')
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={ () => { props.changeFilter("all") } }>
                All
            </button>
            <button onClick={ () => { props.changeFilter("active") } }>
                Active
            </button>
            <button onClick={ () => { props.changeFilter("completed") } }>
                Completed
            </button>
        </div>
    </div>
}

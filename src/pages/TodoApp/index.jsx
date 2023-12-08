import React, { useEffect, useState } from 'react'
import './styles.css'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState({
        id: null,
        name: '',
        status: false
    })
    const [inputError, setInputError] = useState('')

    const validate = (todo) => {
        let isValid = true
        if (!todo.name) {
            setInputError('Todo cannot be empty')
            isValid &&= false
        } else setInputError('')
        return isValid
    }

    const addTodo = (e) => {
        e.preventDefault()
        if (validate(todo)) {
            const newTodoList = [...todoList]
            newTodoList.unshift(todo)
            setTodoList([...newTodoList])
            setTodo({
                id: null,
                name: '',
                status: ''
            })
        }
    }

    const deleteTodo = (id) => {
        setTodoList([...todoList.filter(item => item.id !== id)])
    }

    const updateTodoStatus = (id) => {
        const newTodoList = todoList.map(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodoList([...newTodoList])
    }

    const handleTodoChange = (e) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            id: todoList.length + 1,
            [name]: value,
            status: false
        })
    }

    return (
        <div className='mx-auto pt-4 d-flex flex-column align-items-center border'
            style={{ maxWidth: '600px', width: '100%' }}>
            <h1 className='mb-4 fw-bold'>To-Do List</h1>
            <p className='mb-4'>Enter text into the input field to add items to your list.</p>
            <p className='mb-4'>Click the "X" to remove the item from your list.</p>
            <p className='mb-4'>Click the item to mark it as complete.</p>
            <form onSubmit={addTodo}
                className='input-form d-flex align-items-center gap-3'
            >
                <input type="text" placeholder='Input to do'
                    className='form-control flex-grow-1 px-2 py-2'
                    name='name'
                    value={todo.name}
                    onChange={handleTodoChange} />
                <button type="button"
                    className='flex-shrink-0 btn btn-outline-primary rounded-circle'
                    style={{ width: 40, height: 40 }}
                    onClick={addTodo}>+</button>
            </form>
            <p className='m-0 p-0 text-danger'>{inputError}</p>
            <div className="todo-list">
                {todoList.map(item => (
                    <div key={item.id}
                        className={`todo-item my-3 d-flex justify-content-between align-items-center border ${item.status ? 'complete-item' : 'incomplete-item'}`}>
                        <p className='item__name btn text-start flex-grow-1 m-0 py-2 px-1 border-0'
                            onClick={() => updateTodoStatus(item.id)}>{item.name} {item.status ? '(completed)' : ''}</p>
                        <p className='item__delete btn flex-shrink-0 m-0 fw-bold'
                            onClick={() => deleteTodo(item.id)}>X</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoApp
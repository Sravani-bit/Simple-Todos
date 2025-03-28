import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoItemList: initialTodosList, newTodo: ''}

  onChangeInput = event => {
    this.setState({newTodo: event.target.value})
  }

  onClickAdd = () => {
    const {newTodo} = this.state
    const todoItem = {
      id: uuidv4,
      title: newTodo,
    }

    this.setState(prevState => ({
      todoItemList: [...prevState.todoItemList, todoItem],
    }))
  }

  deleteTodo = id => {
    const {todoItemList} = this.state
    const filteredTodoList = todoItemList.filter(each => each.id !== id)
    this.setState({todoItemList: filteredTodoList})
  }

  render() {
    const {todoItemList} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              onChange={this.onChangeInput}
              className="input"
            />
            <button
              type="button"
              onClick={this.onClickAdd}
              className="add-button"
            >
              Add
            </button>
          </div>
          <ul>
            {todoItemList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

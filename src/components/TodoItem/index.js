// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <div className="todo-container">
        <p className="paragraph">{title}</p>
        <button type="button" onClick={onDelete} className="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem

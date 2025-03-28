// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editButton: true,
      changedTitle: props.todoDetails.title,
    }
  }

  onChangeInput = event => {
    this.setState({changedTitle: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({editButton: !prevState.editButton}))
  }

  render() {
    const {todoDetails, deleteTodo} = this.props
    const {id} = todoDetails
    const onDelete = () => {
      deleteTodo(id)
    }
    const {editButton, changedTitle} = this.state

    return (
      <li>
        {editButton ? (
          <div className="todo-container">
            <p className="paragraph">{changedTitle}</p>
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              Edit
            </button>
            <button type="button" onClick={onDelete} className="button">
              Delete
            </button>
          </div>
        ) : (
          <div className="todo-container">
            <input
              type="text"
              className="paragraph"
              onChange={this.onChangeInput}
              value={changedTitle}
            />
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              Save
            </button>
            <button type="button" onClick={onDelete} className="button">
              Delete
            </button>
          </div>
        )}
      </li>
    )
  }
}

export default TodoItem

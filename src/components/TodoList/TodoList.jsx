import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';

function TodoList({ deleteTodo, editTodo, finishTodo }) {
  const list = useSelector((state) => state.todo.todoList)

  function onEdit (todo, todoText) {
    editTodo({todo, todoText})
  }

  function onDelete (todo) {
    deleteTodo({todo})
  }
  
  function onFinished (todo, isFinished) {
    finishTodo({todo, isFinished})
  }

  return (
    <>
      {list.length > 0 && 
      list.map(todo => <Todo 
                          key={todo.id} 
                          id={todo.id} 
                          isFinished={todo.finished} 
                          todoData={todo.todoData}
                          changeFinished={(isFinished) => onFinished(todo, isFinished)}
                          onDelete={() => onDelete(todo)}
                          onEdit={(todoText) => onEdit(todo, todoText)}
                      />)}
    </>
  )
}

export default TodoList;
import { useContext } from 'react';
import Todo from '../Todo/Todo';
import TodoContext from '../../context/TodoContext';
import TodoDispatchContext from '../../context/TodoDispatchContext';

function TodoList() {
  const {list, setList} = useContext(TodoContext)
  const {dispatch} = useContext(TodoDispatchContext)

  function onFinished (todo, isFinished) {
    dispatch({
      type: 'finish_todo',
      payload: {todo, isFinished: isFinished}
    })
  }

  function onDelete (todo) {
    dispatch({
      type: 'delete_todo',
      payload: {todo}
    })
  }

  function onEdit (todo, todoText) {
    dispatch({
      type: 'edit_todo',
      payload: {todo, todoText}
    })
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
import { ADD_TODO, EDIT_TODO, DELETE_TODO, FINISH_TODO } from '../constants/actions'

const addTodo = (inputText) => ({
  type: ADD_TODO,
  payload: { todoText: inputText },
});

const editTodo = (todo, todoText) => ({
  type: EDIT_TODO,
  payload: { todo, todoText },
});

const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  payload: { todo },
});

const finishTodo = (todo, isFinished) => ({
  type: FINISH_TODO,
  payload: { todo, isFinished },
});

export {
  addTodo, 
  editTodo, 
  deleteTodo, 
  finishTodo
};
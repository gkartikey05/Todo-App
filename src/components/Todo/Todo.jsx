import { useState } from 'react'

function Todo({todoData, isFinished, changeFinished, onDelete, onEdit}) {
  const [finised, setFinished] = useState(isFinished)
  const [isEditting, setIsEditting] = useState(false)
  const [editText, setEditText] = useState(todoData)

  return (
    <div>
      <input 
        type="checkbox" 
        checked={finised} 
        onChange={(e) => {setFinished(e.target.checked), changeFinished(e.target.checked)}} 
      />{
          (isEditting) ? 
            <input 
              type="text" 
              onChange={e => setEditText(e.target.value)} 
              value={editText} 
            /> : 
            <span>{todoData}</span>
        }
      <button 
        onClick={() => {setIsEditting(!isEditting), onEdit(editText)}}> 
          {(!isEditting) ? "Edit" : "Save"} 
      </button>
      <button 
        onClick={onDelete}> 
       Delete 
      </button>
    </div>
  )
}

export default Todo;

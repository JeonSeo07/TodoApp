import React from 'react'
import { MdRemoveCircleOutline } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import classNames from 'classnames';
import '../styles/TodoListItem.scss'

function TodoListItem({todo,  onToggle, onRemove}) {

  const {id, text, checked} = todo;

  return (
    <div className='TodoListItem'>
      {/* onClick처럼 직접적인 이벤트는 함수 호출시 ()=>{}로 감싼뒤에 호출해줘야 오류없이 나온다. */}
      <div className= { classNames('Checkbox', {checked})} onClick={()=>{onToggle(id)}}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={()=>{onRemove(id)}}><MdRemoveCircleOutline /></div>
    </div>
  )
}

export default TodoListItem
import React, { useState } from 'react'
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss'
import {useCallback} from 'react'

function TodoInsert({onInsert}) {

  const [value, setValue] = useState(""); // value 초기값은 "" 공백으로 설정

  const onChange = useCallback((e)=>{
    console.log(e);
    setValue(e.target.value);
  },[])

  const onSubmit = useCallback((e)=>{
    onInsert(value);
    setValue('');
    e.preventDefault();
    //submit이벤트는 브라우저에서 새로고침을 발생시킨다
  },[value])

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      {/* 입력했을 때 값이 바뀌게 만드는 것 = onChange */}
      <input type='text' placeholder='할 일을 입력하세요' onChange={onChange} value={value} />
      <button type='submit'><MdAdd/></button>
    </form>
  )
}

export default TodoInsert
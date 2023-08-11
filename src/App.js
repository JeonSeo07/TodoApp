import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원가기',
      checked: false,
    },
  ]);

  const  nextid = useRef(4);
  console.log(nextid);

  // useCallback()을 사용하지 않으면 함수가 매번 실행된다.
  const onInsert = useCallback((value) =>{
    const todo = {
      id: nextid.current,
      text: value,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextid.current += 1;
  },[todos])

  const onToggle = useCallback((id) =>{
    // {... } : 스프레드 연산자
    // todo : todo 객체에 기존 속성들을 다 가져온다. (id: 2,text: '요리하기',checked: true,)
    // checked:!todo.checked : 기존 값에서 반대로 바꿔라
    setTodos(todos.map(todo => todo.id === id ? {...todo, checked:!todo.checked} : todo ));
  },[todos])

  //map : 모든 배열을 다 가져온다.
  //filter : 조건에 맞는 것만 추려서 새로 배열을 만들어준다.
  //todo => todo.id !== id : 내가 선택한 아이와 같지 않는 것만 가져와라
  const onRemove = useCallback((id) =>{
    setTodos(todos.filter(todo => todo.id !== id ))
  },[todos])
  
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle = {onToggle} onRemove={onRemove}/>
    </TodoTemplate>
  );
}

export default App;

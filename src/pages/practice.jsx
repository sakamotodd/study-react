import { Header } from '../components/Header';
import React, { useState } from 'react';

export default function practice() {
  const [str, setStr] = useState([]);
  const [tmp, setTmp] = useState('');
  const [findTodo, setFindTodo] = useState([]);

  const arr = ['aaa', 'bbb', 'ccc'];
  const val = 'bbb';
  const b = arr.indexOf(val);
  console.log(b);

  const todoChange = (e) => {
    setTmp(e.target.value);
  };

  const addTodo = () => {
    setStr([...str, tmp]);
    setTmp('');
  };

  const removeTodo = (s) => {
    setStr(str.filter((x) => x !== s));
  };

  useEffect(() => {
    const newItems = str.filter((xx) => {
      return xx.indexOf(value) !== -1;
    });
    setFindTodo(newItems);
  }, [value]);

  return (
    <div>
      <Header />

      <input type="text" value={tmp} onChange={todoChange} />
      <input type="text" value={tmp} onChange={todoChange} />

      <button onClick={addTodo}>ボタン</button>
      {str.map((s, index) => {
        return (
          <ul key={index}>
            <li>
              {s}
              <button onClick={() => removeTodo(s)}>削除</button>
              <button onClick={() => update(s)}>更新</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

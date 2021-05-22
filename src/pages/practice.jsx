import { Header } from '../components/Header';
import React, { useState } from 'react';

export default function practice() {
  //   const defaultValue = { title: '', doing: false };
  const [tasks, setTasks] = useState([]);
  const [tmp, setTmp] = useState();

  const addTask = () => {
    setTasks([...tasks, tmp]);
    setTmp('');
  };

  const deleteTask = () => {
    setTmp('');
  };
    
  return (
    <>
      <Header />
      <input type="text" value={tmp} onChange={(e) => setTmp(e.target.value)} />
      <button onClick={addTask}>追加</button>
      {tasks.map((task) => {
        return (
          <div key={task}>
            <div>{task}
            <button>削除</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

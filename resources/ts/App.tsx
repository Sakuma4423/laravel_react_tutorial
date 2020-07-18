// TODOアプリのエントリーポイント

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Task from './components/Types';
import TaskInput from './components/TaskInput'; // 入力欄
import TaskList from './components/TaskList'; // タスクリスト

// タスクの初期値(Task型の配列)
const initialState: Task[] = [
  {
    id: 2,
    title: '次にやるやつ',
    done: false,
  },
  {
    id: 1,
    title: '初めにやるやつ',
    done: true,
  },
];

// React Functional Component型のエントリーポイント
const App: React.FC = () => {
  // useState（タスク、Task型の配列、初期値は上のやつ）
  const [tasks, setTasks] = useState<Task[]>(initialState);

  return (
    <>
      {/* タスク入力欄 */}
      <TaskInput setTasks={setTasks} tasks={tasks} />
      {/* タスク一覧 */}
      <TaskList setTasks={setTasks} tasks={tasks} />
    </>
  );
};

// 描画部分
if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// TODOアプリのタスク入力欄
import React, { useState } from 'react';
import Task from './Types';

// propsの型指定
type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
};

// タスク入力欄
const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
  // useState（タイトル、文字列型、初期値空文字）
  const [inputTitle, setInputTitle] = useState<string>('');
  // useState（タスク数のカウント、数値型、初期値はタスク数 + 1）
  // Why：何で +1
  // Ans：taskidを必ず1からでスタートしたいから
  const [count, setCount] = useState<number>(tasks.length + 1);

  // タイトル入力欄のイベントハンドラ（チェンジイベント）
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // イベント発生したinputの値をsetInputTitleを通してinputTitleに格納
    setInputTitle(e.target.value);
  };

  // 追加ボタン押下時のイベントハンドラ（クリックイベント）
  const handleSubmit = () => {
    // countの値を現在の値 + 1する
    setCount(count + 1);

    // 新規タスク(Task型)
    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false,
    };

    // 既存タスクに新規タスクを追加、
    setTasks([newTask, ...tasks]);
    // 追加時、タスク入力欄の値を空にする
    setInputTitle('');
  };

  return (
    <>
      <div className="inputForm">
        <div className="inner">
          <input type="text" className="input" value={inputTitle} onChange={handleInputChange} />
          <button onClick={handleSubmit} className="btn is-primary">
            追加
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskInput;

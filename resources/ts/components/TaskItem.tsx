// 各タスク
import React from 'react';
import Task from './Types';

// propsの型指定
type Props = {
  task: Task;
  handleDone: (task: Task) => void;
  handleDelete: (task: Task) => void;
};

// 各タスク
const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
  return (
    <li className={task.done ? 'done' : ''}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          // チェックボックスクリック時のイベントハンドラ
          onClick={() => handleDone(task)}
          defaultChecked={task.done}
        />
        <span className="checkbox-label">{task.title}</span>
      </label>
      {/* 削除ボタン押下げ時のイベントハンドラ */}
      <button onClick={() => handleDelete(task)} className="btn is-delete">
        削除
      </button>
    </li>
  );
};

export default TaskItem;

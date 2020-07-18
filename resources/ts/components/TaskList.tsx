// TODOアプリのタスク一覧
import React from 'react';
import TaskItem from './TaskItem';
import Task from './Types';

// propsの型指定
type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
};

// タスク一覧
const TaskList: React.FC<Props> = ({ setTasks, tasks }) => {
  const handleDone = (task: Task) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id === task.id) {
          console.log(prev);
          console.log(t);
          return { ...task, done: !task.done };
        } else {
          console.log(t);
          return t;
        }
      })
    );
  };

  const handleDelete = (task: Task) => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
    <div className="inner">
      {tasks.length <= 0 ? (
        '登録されたTODOはありません。'
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

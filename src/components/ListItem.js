import React from 'react';

export default function ListItem({ isEditing, task, index }) {
  console.log(task);
  // если в режиме редактирования, то делаем инпут, если нет - то ячейку таблицы со значением из списка задач
  return isEditing ? (
    <td>
      <input type="text" value={task}/>
    </td>
  ) : (
    <td>{task}</td>
  );
}
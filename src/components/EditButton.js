import React from 'react';

export default function EditButton({ saveEditedTask, setEditState, isEditing, task }) {
  return isEditing ? (
    <td>
      <button
        type="button"
        onClick={e => {
          saveEditedTask(task, index);
          setEditState();
        }}
      >
        Save
      </button>
    </td>
  ) : (
    <td>
      <button type="button" onClick={setEditState}>Edit</button>
    </td>
  );
}
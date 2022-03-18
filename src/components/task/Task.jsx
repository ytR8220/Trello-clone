import { Draggable } from 'react-beautiful-dnd';

export const Task = (props) => {
  const { task, setTaskList, taskList, index } = props;

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className='taskBox'
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className='taskText'>{task.text}</p>
          <button
            className='taskTrashButton'
            onClick={() => handleDelete(task.id)}
          >
            <i className='fa-solid fa-trash-can'></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};

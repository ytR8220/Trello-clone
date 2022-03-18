import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { Task } from './Task';

export const Tasks = (props) => {
  const { setTaskList, taskList } = props;

  const reoeder = (taskList, startIndex, endIndex) => {
    const remove = taskList.splice(startIndex, 1);
    taskList.splice(endIndex, 0, remove[0]);
  };

  const handleDragEnd = (result) => {
    reoeder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

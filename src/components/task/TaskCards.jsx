import { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { TaskCard } from './TaskCard';

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: '0',
      draggableId: 'item0',
    },
  ]);

  const reoeder = (taskCardsList, setTaskCardsList, endIndex) => {
    const remove = taskCardsList.splice(setTaskCardsList, 1);
    taskCardsList.splice(endIndex, 0, remove[0]);
  };

  const handleDragEnd = (result) => {
    reoeder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div
            className='taskCardsArea'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
                index={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

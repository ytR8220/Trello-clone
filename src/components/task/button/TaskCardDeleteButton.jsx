export const TaskCardDeleteButton = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard } = props;

  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className='taskCardDeleteButton'
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className='fa-solid fa-xmark'></i>
      </button>
    </div>
  );
};

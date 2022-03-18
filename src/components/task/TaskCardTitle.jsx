import { useCallback, useState } from 'react';

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);

  const [inputCardTitle, setInputCardTitle] = useState('Today');

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (inputCardTitle) {
        setIsClick(false);
      } else {
        alert('タイトルを入力して下さい');
      }
    },
    [inputCardTitle]
  );

  const handleBlur = useCallback(() => {
    if (inputCardTitle) {
      setIsClick(false);
    } else {
      alert('タイトルを入力して下さい');
    }
  }, [inputCardTitle]);

  return (
    <div className='taskCardTitleInputArea' onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className='taskCardTitleInput'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            autoFocus
            maxLength='10'
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

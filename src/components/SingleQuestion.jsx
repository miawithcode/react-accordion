import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';

const SingleQuestion = ({id, title, answer, activeId, toggleQuestion }) => {
  const isActive = id === activeId ;

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => toggleQuestion(id)}>
          {isActive ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </header>
      {isActive && <p>{answer}</p>}
    </article>
  );
};
export default SingleQuestion;

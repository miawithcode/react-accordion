import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';

const SingleQuestion = ({ title, answer }) => {
  const [showAnswer, setShowAnser] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowAnser(!showAnswer)}>
          {showAnswer ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </header>
      {showAnswer && <p>{answer}</p>}
    </article>
  );
};
export default SingleQuestion;

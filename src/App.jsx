import { useState } from 'react';
import data from './data';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div>App</div>
  )
}
export default App
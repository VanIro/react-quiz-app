import logo from './logo.svg';
import './App.css';
import {Questions} from './quiz_questions';
import Quiz from './components/quiz';

let cat_values=['Physics','Maths','Music','Movies']

function App() {

  return (
    <Quiz cats={cat_values} questions={Questions} />
  );
}

export default App;

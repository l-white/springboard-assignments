import './App.css';
import {choice, remove} from './components/Helper';

let item = choice();

function App() {
  return (
    <div className="App">
      <p>I'd like one {item}, please.</p>
      <p>Here you go. Here is one {item}.</p>
      <p>This {item} is delicious! May I have another?</p>
      <p>I'm sorry, that was the last {item}. Here are the rest of our options: </p>
      <div>{remove(item)}</div>
    </div>
  );
}

export default App;

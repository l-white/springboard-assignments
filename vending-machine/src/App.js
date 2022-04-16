import './App.css';
import Nav from './components/Nav'
import Home from './pages/Home'
import Eat from './pages/Eat'
import Drink from './pages/Drink'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/eat" element={<Eat/>} />
        <Route path="/drink" element={<Drink/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

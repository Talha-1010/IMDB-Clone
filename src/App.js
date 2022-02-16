import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={ <Home/> }></Route>
          <Route path = "/SignIn" element={ <SignIn/> }></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

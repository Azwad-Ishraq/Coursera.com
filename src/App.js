
import './App.css';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="nav-menu">
            <h1>Coursera.com</h1>
            <ul>
              <li id='home'>Home</li>
              <li>Your Course</li>
              <li>Offers</li>
              <li>Job opportunities</li>
            </ul>
          </div>
        </nav>
      </header>
      <Courses></Courses>
    </div>
  );
}

export default App;

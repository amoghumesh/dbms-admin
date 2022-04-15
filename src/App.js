import logo from './logo.svg';
import './App.css';
function drg() { return false; } 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img draggable="false"src={logo} className="App-logo bckgd-img"alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p></p>
        
        Hello Amogh!
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

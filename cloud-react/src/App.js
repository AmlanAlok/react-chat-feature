// import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        Homepage
        <Switch>
          {/* <Route exact path="/">
            <App/>
          </Route> */}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        
      </div>
    </Router>

    /* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */


  );
}

export default App;

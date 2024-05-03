import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../../State';

function App() {

  const { state } = useContext(AppContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoggedIn) {
        navigate("/login");
    }
  }, [state.isLoggedIn]);

  return (
    <div className="App">
      <header className="App-header">
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

        <Link to="/404">404 page</Link>
        <Link to="/500">500 page</Link>


        <a href="/404">404 page</a>
      </header>
    </div>
  );
}

export default App; 
import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const dataFromRedux = reduxState.dataReducer.data;

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {dataFromRedux}
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
      </header>
    </div>
  );
}

export default App;

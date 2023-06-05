import "./App.css";
import Button from "remoteApp/Button";
import useCount from "remoteApp/store/countStore";

function App() {
  const [count, setCount] = useCount(0);

  return (
    <>
      <h1>Host Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

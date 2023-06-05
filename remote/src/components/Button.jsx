import "./Button.css";
import useCount from "../store/countStore";

function Button() {
  const [state, setState] = useCount(0);

  return (
    <div>
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        Click me: {state}
      </button>
    </div>
  );
}

export default Button;

import { useContext } from "react";
import { Context } from "./context/context";
function App() {
  const { input, setInput, result, onSent } = useContext(Context);
  function handleClick() {
    onSent(input);
    setInput("");
  }
  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
        <div className="result">{result}</div>
      </div>
    </>
  );
}

export default App;

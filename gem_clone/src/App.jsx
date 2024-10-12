import { useContext } from "react";
import { Context } from "./context/context";
function App() {
  const { input, setInput, result, onSent, loading } = useContext(Context);
  function handleClick() {
    onSent(input);
    setInput("");
  }
  function renderResult() {
    if (!result) return null;

    return result.split("\n").map((line, index) => {
      if (line.startsWith("##")) {
        return <h2 key={index}>{line.replace("##", "").trim()}</h2>;
      }
      if (line.startsWith("***")) {
        return <h2 key={index}>{line.replace("***", "").trim()}</h2>;
      }
      return <p key={index}>{line}</p>;
    });
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
        {loading ? (
          <div>
            <h1>Loading</h1>
          </div>
        ) : (
          <div className="result">{renderResult()}</div>
        )}
      </div>
    </>
  );
}

export default App;

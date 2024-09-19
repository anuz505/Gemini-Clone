import { createContext, useState } from "react";
import runChat from "../config/gemini.js"; // Ensure this file is a .js file or your environment supports .mjs

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const onSent = async (prompt) => {
    setLoading(true);
    try {
      const response = await runChat(prompt);
      setResult(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    input,
    setInput,
    result,
    setResult,
    onSent,
    loading,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

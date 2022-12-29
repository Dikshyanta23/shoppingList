import List from "./List";
import "./App.css";
import { useState } from "react";
import items from "./Data";

function App() {
  const [list, setList] = useState(items);

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  if (list.length === 0) {
    return (
      <div className="container">
        <h2 className="title">No items left</h2>
        <button onClick={() => setList(items)} className="btn">
          Reset
        </button>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="title">Shopping list</h1>
      <List list={list} removeItem={removeItem} />
      <div className="btn-hlder">
        <button onClick={() => setList([])} className="btn">
          Clear all
        </button>
      </div>
    </div>
  );
}

export default App;

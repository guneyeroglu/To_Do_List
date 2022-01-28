import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, titleName: "Alışveriş yap", completedStatus: false },
  { id: 2, titleName: "Fatura öde", completedStatus: true },
  { id: 3, titleName: "Köpeği gezdir", completedStatus: false }
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setNewTitle] = useState("");
  const addNew = (param) => {
    setList([
      ...list,
      { id: Date.now(), titleName: param, completedStatus: false }
    ]);
    setNewTitle("");
  };
  const markCompleted = (id) => {
    setList(
      list.map((item) =>
        item.id === id
          ? { ...item, completedStatus: !item.completedStatus }
          : item
      )
    );
  };
  const clearCompleted = () => {
    setList(list.filter((item) => !item.completedStatus)); // x === false ve !x aynı.
  };

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="add_form">
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <button onClick={() => addNew(newTitle)}>Ekle</button>
      </div>
      <div className="list">
        {list.map((item, index) => (
          <div
            key={index}
            onClick={() => markCompleted(item.id)}
            className={item.completedStatus ? "completed" : ""}
          >
            {item.titleName}
          </div>
        ))}
      </div>
      <button onClick={() => clearCompleted()} className="clear">
        Tamamlananları Temizle
      </button>
    </div>
  );
}

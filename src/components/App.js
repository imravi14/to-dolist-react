import React, { useState } from "react";
import "./App.css";
import Item from "./Item";

function App() {
  const [nameInput, setNameInput] = useState("");

  const [items, setItem] = useState([]);

  const deleteHandler = (id) => {
    console.log(deleteHandler);

    setItem((prevValues) => {
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const inputChangeHandler = (event) => {
    const text = event.target.value;
    setNameInput(text);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setItem((prevValues) => {
      console.log("prevvalue =>", prevValues);
      return [nameInput, ...prevValues];
    });
    setNameInput(""); // Reset the input field after submitting
  };

  const content =
    items.length > 0 ? (
      items.map((itemText, index) => {
        return (
          <Item
            key={index}
            name={itemText}
            id={index}
            onDelete={deleteHandler}
          />
        );
      })
    ) : (
      <p> No Items Found</p>
    );

  return (
    <div className="App">
      <div className="header bg">
        <h2>To Do LIst</h2>
      </div>

      <div className="showArea bg">{content}</div>
      <div className="createArea bg">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={nameInput}
            onChange={inputChangeHandler}
            placeholder="Item name"
          />
          <button type="submit">Add+</button>
        </form>
      </div>
    </div>
  );
}

export default App;

import React from "react";

const Item = (props) => {
  console.log(props);

  const clickHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="item">
      <p>{props.name}</p>
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};

export default Item;

import React from "react";
import Item from "./Item";
const List = ({ list, removeItem }) => {
  return (
    <div className="all-items">
      {list.map((item) => {
        return <Item key={item.id} {...item} removeItem={removeItem}></Item>;
      })}
    </div>
  );
};

export default List;

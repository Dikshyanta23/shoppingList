import React from "react";

const Item = ({ id, name, image, removeItem }) => {
  return (
    <article className="single-item">
      <img src={image} alt={name} className="item-img" />
      <section className="card-body">
        <h3>{name}</h3>
        <button onClick={() => removeItem(id)} className="btn">
          Delete<i class="gg-trash-empty"></i>
        </button>
      </section>
    </article>
  );
};

export default Item;

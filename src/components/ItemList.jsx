// src/components/ItemList.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../core/redux/CRUD/itemsSlice";
// import { removeItem } from '../store/itemsSlice';

const ItemList = ({ setCurrentId }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => setCurrentId(item.id)}>Edit</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

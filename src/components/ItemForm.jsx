// src/components/ItemForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../core/redux/CRUD/itemsSlice";
// import { addItem, updateItem } from "../store/itemsSlice";

const ItemForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const currentItems = useSelector((state) => state.items.find((item) => item.id === currentId));
  const [title, setTitle] = useState(currentItems ? currentItems.title : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateItem({ id: currentId, title }));
      setCurrentId(null);
    } else {
      dispatch(addItem(title));
    }
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add a new item" />
      <button type="submit">{currentId ? "Update" : "Add"}</button>
    </form>
  );
};

export default ItemForm;

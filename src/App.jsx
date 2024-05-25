// src/App.js
import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [currentId, setCurrentId] = useState(null);

  return (
    <div>
      <h1>Redux Toolkit CRUD</h1>
      {/* <ItemForm currentId={currentId} setCurrentId={setCurrentId} />
      <ItemList setCurrentId={setCurrentId} /> */}
      <PostForm currentId={currentId} setCurrentId={setCurrentId} />
      <PostList setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;

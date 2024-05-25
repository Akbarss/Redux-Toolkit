import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addPost = createAsyncThunk("posts/addPost", async (title) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
});

export const updatePost = createAsyncThunk("posts/updatePost", async ({ id, title }) => {
  const response = await axios.put(`${API_URL}/${id}`, { title });
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

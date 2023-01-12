import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import TodoRecord from "../pages/TodoRecord";
import TodoDetail from "../pages/TodoDetail";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/TodoRecord" element={<TodoRecord />} />
          <Route path="/TodoDetail/:id" element={<TodoDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

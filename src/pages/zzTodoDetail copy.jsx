import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../modules/todoListSlice";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const dispatch = useDispatch();
  //const { isLoading, error, todos } = useSelector((state) => state.todos);
  const { id } = useParams();
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  //   if (isLoading) {
  //     return <div>로딩 중....</div>;
  //   }

  //   if (error) {
  //     return <div>{error.message}</div>;
  //   }

  return (
    <Layout>
      <div>{id}ㄹㄹ</div>
    </Layout>
  );
};

export default TodoDetail;

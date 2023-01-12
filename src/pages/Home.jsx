import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../modules/todoListSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <StBtn>
        <StListBtn>
          <div>
            <Link to="/TodoList">
              <img src="img/todolist_img01.png" alt="TodoListBtn" />
            </Link>
          </div>
        </StListBtn>
        <StRecordBtn>
          <div>
            <Link to="/TodoRecord">
              <img src="img/todorecord_img01.png" alt="TodoRecordBtn" />
            </Link>
          </div>
        </StRecordBtn>
      </StBtn>
    </Layout>
  );
};

export default Home;

const StBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 100px;
`;
// 이미지가 커서
const StListBtn = styled.div`
  width: 500px;
  height: 500px;
`;

const StRecordBtn = styled.div`
  width: 500px;
  height: 500px;
`;

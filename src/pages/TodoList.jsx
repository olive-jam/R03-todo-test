import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos, __deleteTodos } from "../modules/todoListSlice";
import Layout from "../components/Layout";
// import TodoDetail from "./TodoDetail";

const TodoList = () => {
  const navigate = useNavigate();
  const onClickDeleteHandler = async (todoId) => {
    await dispatch(__deleteTodos(todoId));
    dispatch(__getTodos());
    alert("정말 삭제하시겠습니까?");
  };

  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (todos.length === 0) {
    return <div>리스트가 없어요ㅠㅠ</div>;
  }
  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <StListCtrl>
        <ListHead>
          <h3>2023년 꼭 하고싶은 리스트</h3>
          <StRecd
            onClick={() => {
              navigate("/TodoRecord");
            }}
          >
            <img src="img/todoBtn_3small2.png" alt="기록" />
          </StRecd>
        </ListHead>
        <StCardRow>
          {todos.map((todo) => (
            <StListCard key={todo.id}>
              <TodoListCard>
                <TodoId>
                  <div> ID : </div>
                  <div> {todo.id} </div>
                </TodoId>
                <TodoCard>
                  <CardText> 작성자</CardText>
                  <div>{todo.name} </div>
                </TodoCard>
                <TodoCard>
                  <CardText> 제목</CardText>
                  <div>{todo.title} </div>
                </TodoCard>
                <TodoCard>
                  <CardText> 내용</CardText>
                  <div>{todo.content} </div>
                </TodoCard>
              </TodoListCard>
              <StLink>
                <StDetail
                  onClick={() => {
                    navigate(`/TodoDetail/${todo.id}`);
                  }}
                >
                  <img src="img/todoBtn_2small2.png" alt="상세보기" />
                </StDetail>
                <DeleteBtn
                  type="button"
                  onClick={() => onClickDeleteHandler(todo.id)}
                >
                  <img src="img/todoBtn_2small1.png" alt="삭제하기" />
                </DeleteBtn>
              </StLink>
            </StListCard>
          ))}
        </StCardRow>
      </StListCtrl>
    </Layout>
  );
};

export default TodoList;

const StListCtrl = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StCardRow = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

const StListCard = styled.div`
  width: 280px;
  height: 320px;
  margin: 20px;
  border: 3px solid red;
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const TodoListCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
const TodoId = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
const TodoCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardText = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

const StLink = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;

  margin-top: 30px;
`;
const DeleteBtn = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer; // 손모양
`;
const StDetail = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`;

const StRecd = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;

  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
`;
const ListHead = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

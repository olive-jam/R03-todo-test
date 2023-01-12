import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __postTodos } from "../modules/todoListSlice";
import Layout from "../components/Layout";

const TodoRecord = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const { isLoading, error, todos } = useSelector((state) => state.todos);

  // Date.now() 현재시간
  const onSubmitHandler = (todo) => {
    const newTodo = {
      //id: Date.now(),
      title,
      name,
      content,
    };
    dispatch(__postTodos(newTodo));

    console.log(todo.name);

    alert("등록하시겠습니까?");
    navigate("/TodoList");
  };

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <StMainCtrl>
        <form onSubmit={onSubmitHandler}>
          <StBox>
            <h3>작성자</h3>
            <StInput
              type="text"
              value={name}
              onChange={(ev) => {
                const { value } = ev.target;
                setName(value);
              }}
              placeholder="작성자 이름을 넣으세요.(5자 이내)"
            ></StInput>
            <h3>제목</h3>
            <StInput
              type="text"
              value={title}
              onChange={(ev) => {
                const { value } = ev.target;
                setTitle(value);
              }}
              placeholder="제목을 넣으세요.(50자 이내)"
            ></StInput>
            <h3>내용</h3>
            <StInputText
              type="text"
              value={content}
              onChange={(ev) => {
                const { value } = ev.target;
                setContent(value);
              }}
              placeholder="내용을 넣으세요.(200자 이내)"
              // 박스안에서 줄바뀜 적용하기
            ></StInputText>
          </StBox>
          <StBtn>
            <img src="img/todoBtn_small3.png" alt="등록하기" />
          </StBtn>
        </form>
      </StMainCtrl>
    </Layout>
  );
};

export default TodoRecord;

const StMainCtrl = styled.div`
  background: url("/img/Record_bg01.png") no-repeat;
  background-size: 100%;
  height: 780px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* position: relative;
  top: 20px; */
`;
const StBtn = styled.button`
  background-color: transparent;
  border: 0px;

  position: relative;
  /* top: 40px; */
  left: 20px;
  margin-top: 20px;
`;
const StInput = styled.input`
  width: 200px;
  height: 20px;
`;
const StInputText = styled.input`
  width: 200px;
  height: 100px;
`;

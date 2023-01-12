import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { __getTodos } from "../modules/todoListSlice";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { __getDetail } from "../modules/detailSlice";

const TodoDetail = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const { id } = useParams();
  const navigate = useNavigate();
  //   const name = useSelector((state) => state.todos.name);
  //   console.log(name);
  //   const title = useSelector((state) => state.todos.title);
  //   const content = useSelector((state) => state.todos.content);

  useEffect(() => {
    dispatch(__getDetail());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <DetailCtrl>
        <TodoListCard>
          <TodoId>
            <div> ID : </div>
            <div> {id} </div>
          </TodoId>
          <TodoBtn
            onClick={() => {
              navigate("/TodoList");
            }}
          >
            <img src="img/todoList_small.png" alt="Todo List로 돌아가기" />
          </TodoBtn>
          <TodoCard>
            <CardText> 작성자</CardText>
            {/* <div>{`${todos.name}`} </div> */}
          </TodoCard>
          <TodoCard>
            <CardText> 제목</CardText>
            {/* <div>{`${todos.title}`} </div> */}
          </TodoCard>
          <TodoCard>
            <CardText> 내용</CardText>
            {/* <div>{`${todos.content}`} </div> */}
          </TodoCard>
        </TodoListCard>
        {/* <div>{id}</div>
        <div>{`${name}`}</div>
        <div>{`${title}`}</div>
        <div>{`${content}`}</div> */}
      </DetailCtrl>
    </Layout>
  );
};

export default TodoDetail;

const DetailCtrl = styled.div`
  color: black;
  //   width: 400px;
  //   height: 500px;

  //   /* 최상단 위치 */
  //   z-index: 999;

  //   /* 중앙 배치 */
  //   /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  //   /* translate는 본인의 크기 기준으로 작동한다. */
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);

  //   /* 모달창 디자인 */
  //   background-color: gray;
  //   border: 1px solid black;
  //   border-radius: 8px;
`;
const TodoListCard = styled.div`
  color: black;
`;
const TodoId = styled.div`
  color: black;
`;
const TodoCard = styled.div`
  color: black;
`;
const CardText = styled.div`
  color: black;
`;
const TodoBtn = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`;

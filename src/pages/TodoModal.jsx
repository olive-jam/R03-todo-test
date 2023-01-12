import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../modules/todoListSlice";
import Layout from "../components/Layout";
//import { useParams } from "react-router-dom";
import styled from "styled-components";

function TodoModal({ setModalOpen, id, title, content, name }) {
  //const TodoDetail = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.todos);

  //모달끄기
  const closeModal = () => {
    setModalOpen(false);
  };

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
      <ModalCtrl>
        <div>{id}ㄹㄹ</div>
        <div>{name}ㄹㄹ</div>
        <div>{title}ㄹㄹ</div>
        <div>{content}ㄹㄹ</div>
        <XBtn onClick={closeModal}>닫기</XBtn>
      </ModalCtrl>
    </Layout>
  );
}

export default TodoModal;

const ModalCtrl = styled.div`
  width: 400px;
  height: 500px;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;

const XBtn = styled.button`
  background-color: transparent;
  border: 0px;

  position: absolute;
  right: 10px;
  top: 10px;
`;

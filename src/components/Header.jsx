import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <StContainer>
        <StLogo>
          <Link to="/">
            <img src="img/todo_logo.png" width="200" alt="TodoLogo" />
          </Link>
        </StLogo>
        <StTitle>My Todo List</StTitle>
      </StContainer>
      <StLine />
    </div>
  );
};
export default Header;

const StContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StLine = styled.div`
  min-width: 800px;
  height: 4px;
  background-color: red;
  //margin-bottom: 10px;
`;

const StTitle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
`;

import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <div>
      <StLayout>{children}</StLayout>
    </div>
  );
};

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 720px;
`;

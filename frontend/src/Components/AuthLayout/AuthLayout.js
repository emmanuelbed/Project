import React from "react";
import styled from "styled-components";

const AuthLayout = ({ children }) => {
  return (
    <AuthLayoutStyled>
      <div>{children}</div>
    </AuthLayoutStyled>
  );
};

const AuthLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

export default AuthLayout;

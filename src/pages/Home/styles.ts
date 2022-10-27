import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

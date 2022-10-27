import styled from "styled-components";

export const IllustrationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 70%;
  height: 100%;

  background-color: #f5f5f5;

  @media (max-width: 1024px) {
    display: none;
  }
`;

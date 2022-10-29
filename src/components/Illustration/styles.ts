import styled from "styled-components";

export const IllustrationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 70%;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;

  background-color: #f5f5f5;

  @media (max-width: 1024px) {
    display: none;
  }
`;

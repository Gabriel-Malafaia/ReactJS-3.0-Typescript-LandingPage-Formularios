import styled from "styled-components";

export const FormHomePageContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 1rem;
`;

export const FormHomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 380px;
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const FormHomePage = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 1rem;

  .MuiFormControl-root {
    width: 100%;
  }
  
  button {
    width: 100%;
    height: 3rem;
    background-color: var(--color-primary-Focus);
    font-size: 16px;
  }
`;

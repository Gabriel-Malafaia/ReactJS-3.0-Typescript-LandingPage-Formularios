import styled, { css } from "styled-components";
import InputMask from "react-input-mask";

interface IInputProps {
  error?: string;
}

export const FormHomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: 100%;

  @media (max-width: 1024px) {
    max-width: 380px;
    width: 100%;
    padding: 0 1rem;
  }
`;

export const FormHomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 380px;
  width: 100%;
  padding: 2rem 0;
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

  .tooltip {
    position: absolute;
    right: -5px;
    top: -5px;
    background: none !important;

    svg{
      width: 20px;
    }

    span {
      background: none;
    }
  }

  .send__button {
    width: 100%;
    height: 3rem;
    background-color: var(--color-primary-Focus);
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const StyledInput = styled(InputMask)`
  border: 1px solid #c4c4c4;
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  border-radius: 6px;
  font-family: 'Roboto', 'sans-serif';

  :focus,
  :focus:hover {
    border: 2px solid #1976d2;
  }

  :hover {
    border: 1px solid var(--color-grey-1);
  }

  ${({ error }: IInputProps) => {
    switch (error) {
      case "true":
        return css`
          border: 1px solid var(--color-error);

          :focus,
          :focus:hover {
            border: 2px solid var(--color-error);
          }

          :hover {
            border: 1px solid var(--color-error);
          }

          ::placeholder {
            color: var(--color-error);
          }
        `;
    }
  }};
`;

import styled, { css } from "styled-components";
import { TitleComponent } from ".";
import { setColors } from "../Colors/colors";

export const Text = styled(TitleComponent)`
  color: ${({ color }) => setColors(color)};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "title1":
        return css`
          font-size: 2.2rem;
          font-weight: bold;
        `;

      case "title2":
        return css`
          font-size: 1.8rem;
          font-weight: bold;
        `;

      case "title3":
        return css`
          font-size: 1.5rem;
          font-weight: bold;
        `;

      case "text1":
        return css`
          font-size: 1.4rem;
          font-weight: 400;
        `;

      case "text2":
        return css`
          font-size: 1.2rem;
          font-weight: 400;
        `;

      case "text3":
        return css`
          font-style: italic;
          font-size: 0.9rem;
          font-weight: bold;
        `;

      case undefined:
        return css`
          font-size: 1.2rem;
          font-weight: 400;
        `;
    }
  }}
`;

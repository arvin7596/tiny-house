import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.direction === "horizontal" &&
    css`
      flex-direction: row;
      align-items: center;
    `}
  ${(props) =>
    props.direction === "vertical" &&
    css`
      flex-direction: column;
      gap: 4px;
    `}
`;

Row.defaultProps = {
  direction: "horizontal",
};

export default Row;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 30px auto;
  button {
    background: none;
    border: none;
  }
  span {
    text-transform: uppercase;
    color: #2c3e50;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.3em
  }
  svg {
    fill: rgba(44, 62, 80, 0.5);
    transition: all 0.25s ease-in-out;
    &:hover {
      fill: rgba(44, 62, 80, 1);
    }
  }
`;

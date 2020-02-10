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
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.3em
  }
  svg {
    fill: ${props => props.theme.colors.text};
    transition: all 0.25s ease-in-out;
    
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin: 30px auto;
  section {
    position: relative;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    background: ${props => props.theme.colors.backgroundCard};
    flex-direction: column;
    justify-content:center;
    align-items:center;
    transition: all 0.25s ease-in-out;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    h3 {
      cursor: pointer;
      text-transform: uppercase;
      font-size: 16px;
      line-height: 1.3em;
      color: ${props => props.theme.colors.text};
      margin-top: 5px;
    }
    img {
      width: 150px;
    }
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
    
  
`;

export const AddButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 10px;
  left: 185px;
  svg {
    fill: ${props => props.theme.colors.heart};
    transition: all 0.25s ease-in-out;
    &:hover {
      transform: scale(1.2)
    }
  }
`;

export const ContainerModal = styled.div`
  position: relative;
  display: flex;
  flex-direction:column;
  align-items:center;
  button {
    border: none;
    background: none;
    position: absolute;
    top: 10px;
    right: 0;
    svg {
      fill: ${props => props.theme.colors.heart};
      transition: all 0.25s ease-in-out;
      &:hover {
        transform: scale(1.2)
      }
    }
  }
  img {
    width: 100%
  }
  h1 {
      text-transform: uppercase;
      font-size: 24px;
      line-height: 1.3em;
      color: ${props => props.theme.colors.text};
      margin-top: 5px;
    }
`;
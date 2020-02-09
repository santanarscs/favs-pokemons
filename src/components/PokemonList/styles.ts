import styled from 'styled-components';
type Props = {
  isFav: boolean
}
export const Container = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin: 30px auto;
  section {
    position: relative;
    padding: 20px;
    /* border: 1px solid #ccc; */
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    transition: all 0.25s ease-in-out;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    h3 {
      text-transform: uppercase;
      font-size: 16px;
      line-height: 1.3em;
      color: #b3b3b3;
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
  left: 180px;
  svg {
    fill: ${(props:Props) => props.isFav ? 'rgba(255, 0, 0, 0.8)' :'rgba(255, 0, 0, 0.2)'};
    transition: all 0.25s ease-in-out;
    &:hover {
      fill: rgba(255, 0, 0, 0.8);
    }
  }
`;
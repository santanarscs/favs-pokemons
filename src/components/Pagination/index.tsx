import React from 'react';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import { Container } from './styles';

export default function Pagination(props: any) {
  const { fetchDataAction, count, next, previous, store } = props
  const { dispatch }  = store;

  return (
    <Container>
      {previous !== null && (
        <button onClick={() => fetchDataAction(dispatch, previous)}>
          <FaArrowLeft size={25} />
        </button>
      )}
      <span>Total({count})</span>
      <button onClick={() => fetchDataAction(dispatch, next)}>
       <FaArrowRight size={25}/>
      </button>

    </Container>
  );
}

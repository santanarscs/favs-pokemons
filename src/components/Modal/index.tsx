import React from 'react'
import { Container, Content } from './styles';

interface Props {
  children: any
}

const Modal: React.FC<Props> = ({children}): JSX.Element => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

export default Modal;
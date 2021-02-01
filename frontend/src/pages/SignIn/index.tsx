import React from 'react';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
      <Container>
          <form >
            <span>Login</span>
            <input type="text"/>
            <input type="text"/>
            <button type="submit">Entrar</button>
          </form>
      </Container>
  );
}

export default SignIn;
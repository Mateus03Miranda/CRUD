import React from 'react';
import {Link} from 'react-router-dom';
import { Container } from './styles';
import {FiLock,FiUser} from 'react-icons/fi';

const SignIn: React.FC = () => {
  return (
      <Container>
        <main>
          <h1>Checklist Food</h1>
          <form >
            <span>Login</span>
            <FiUser color="#808080" size="31px"/>
            <input type="text"/>
            <FiLock color="#808080" size="31px"/>
            <input type="text"/>
            <button type="submit">Entrar</button>
            <Link to="/signup">Esqueci minha senha</Link>
          </form>
        </main>
      </Container>
  );
}

export default SignIn;
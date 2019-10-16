import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira seu nome'),
  email: Yup.string()
    .email('Insira um email valido')
    .required('O email e obrigatorio'),
  password: Yup.string()
    .min(6, 'Insira ao menos 6 caracteres')
    .required('Insira sua senha'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Informe seu email" />
        <Input name="password" type="password" placeholder="Senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Ja possuo conta</Link>
      </Form>
    </>
  );
}

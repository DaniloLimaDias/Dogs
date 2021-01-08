import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginForm = () => {
  const usename = useForm();
  const password = useForm();

  function hanbleSubmit(event) {
    event.preventDefault();

    if(usename.validate() && password.validate()){

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(),
    }).then((response) =>{
      console.log(response);
      return response.json()
    }).then(json => {
      console.log(json)
    })
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={hanbleSubmit}>
        <Input label="Usuário" type="text" name="usename" {...usename}/>
        <Input label="Senha" type="Password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm

import React from 'react';
import { Container } from './styles';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from '../../hooks/auth'

type Inputs = {
  email: string,
  password: string,
};

const SignIm: React.FC = () => {
  const { signIn } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => signIn(data.email, data.password);


  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("email", { required: true })} />
        {errors.email && <span>Verifique o email</span>}
        
        <input {...register("password", { required: true })} />
        {errors.password && <span>Verifique a senha</span>}
        
        <input type="submit" />
      </form>
    </Container>
  )
}

export default SignIm;
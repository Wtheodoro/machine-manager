import React from 'react';
import * as S from './styles';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from '../../hooks/auth'
import Logo from '../../components/Logo';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import RotatingText from '../../components/RoratingText';

type Inputs = {
  email: string,
  password: string,
};

const SignIm: React.FC = () => {
  const { signIn } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<Inputs> = data => signIn(data.email, data.password);
  const rotatingItems = ['Have control', 'Monitor your machines', 'Avoid failures', 'Avoid downtime', 'Manages online', 'Your team with the best performance']

  return (
    <S.Container>
      <S.LeftSide>
        <Logo />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>
            Sign in for <br/>
            <span>Manage</span>.
          </h2>

          <label htmlFor="email">Email</label>
          <InputText name="email" type="email" register={register} required/>
          {errors.email && <span>check your email</span>}
          
          <label htmlFor="password">Password</label>
          <InputText name="password" type="password" register={register} required/>
          {errors.password && <span>check your password</span>}
          
          <Button>Log In</Button>
        </form>
      </S.LeftSide>
      
      <S.RightSide>
        <S.RotatingWrapper>
          <RotatingText items={[...rotatingItems]}/>
        </S.RotatingWrapper>
      </S.RightSide>
    </S.Container>
  )
}

export default SignIm;
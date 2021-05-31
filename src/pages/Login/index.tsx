import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGetUsersRequest } from '../../store/ducks/users/actions';
import { Container } from './styles';

const Login: React.FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGetUsersRequest())
  })

  const usersFromReducer: any = useSelector((state: any) => console.log(state.reducerUsers.users))

  return (
    <Container>
      <p>hi from login page</p>
    </Container>
  )
}

export default Login;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';
import reducerTypes from '../../store/ducks/reducerTypes';
import { loadGetUsersRequest } from '../../store/ducks/users/actions';
import { UserType } from '../../store/ducks/users/types';

import { Container } from './styles';

const Users: React.FC = () => {
  const dispatch = useDispatch()
  const usersGlobalState = useSelector((state: reducerTypes) => state.reducerUsers.users)
  const [users, setUsers] = useState<UserType[]>()

  useEffect(() => {
    if (usersGlobalState.length === 0) {
      dispatch(loadGetUsersRequest())
    } else {
      setUsers(usersGlobalState)
    }
  }, [usersGlobalState, dispatch])

  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>hi from users</h1>

      {
        users &&
        <p>{users.length}</p>
      }
    </Container>
  )
}

export default Users;
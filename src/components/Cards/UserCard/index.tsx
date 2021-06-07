import React from 'react';
import  { FaUserTie } from 'react-icons/fa'
import { UserType } from '../../../store/ducks/users/types';
import * as S from './styles';

const CompanieCard: React.FC<UserType> = ({ id, name, email, unitId, companyId }) => {
  return (
    <S.Container>
      <FaUserTie />
      <S.InfoWrapper>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Unit ID:</strong> {unitId}</p>
        <p><strong>Company ID:</strong> {companyId}</p>
      </S.InfoWrapper>
    </S.Container>
  )
}

export default CompanieCard;

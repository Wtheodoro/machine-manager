import React from 'react';
import  { FaRegBuilding } from 'react-icons/fa'
import { UnitType } from '../../../store/ducks/units/types';
import * as S from './styles';

const UnitCard: React.FC<UnitType> = ({ id, name, companyId}) => {
  return (
    <S.Container>
      <FaRegBuilding />
      <S.InfoWrapper>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Company ID:</strong> {companyId}</p>
      </S.InfoWrapper>
    </S.Container>
  )
}

export default UnitCard;

import React from 'react';
import * as S from './styles';

interface LittleInfoCard {
  icon: React.ReactNode
  title: string
  value: string | number
}

const LittleInfoCard: React.FC<LittleInfoCard> = ({ icon, title, value}) => {
  return (
    <S.Container>
      <S.IconWrapper>
        {icon}
      </S.IconWrapper>
      <S.InfoWrapper>
        <p>{title}</p>
        <strong>{value}</strong>
      </S.InfoWrapper>
    </S.Container>
  )
}

export default LittleInfoCard;
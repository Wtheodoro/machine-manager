import React from 'react';
import SubTitle from '../../headings/SubTitle';
import * as S from './styles';

const TheCrew: React.FC = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <SubTitle>The Crew</SubTitle>
      </S.TitleWrapper>

      <S.TrackWrapper>
        <S.Track>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-2q9hYyXRQvfUXS9tr7MSgKFIC6QvLKNww&usqp=CAU" alt="elon Musk" />
          <p><strong>Elon</strong></p>
          <p>Musk</p>
        </S.Track>

        <S.Track>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-2q9hYyXRQvfUXS9tr7MSgKFIC6QvLKNww&usqp=CAU" alt="elon Musk" />
          <p><strong>Elon</strong></p>
          <p>Musk</p>
        </S.Track>

        <S.Track>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-2q9hYyXRQvfUXS9tr7MSgKFIC6QvLKNww&usqp=CAU" alt="elon Musk" />
          <p><strong>Elon</strong></p>
          <p>Musk</p>
        </S.Track>

        <S.Track>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-2q9hYyXRQvfUXS9tr7MSgKFIC6QvLKNww&usqp=CAU" alt="elon Musk" />
          <p><strong>Elon</strong></p>
          <p>Musk</p>
        </S.Track>
      </S.TrackWrapper>
      
      
    </S.Container>
  )
}

export default TheCrew;
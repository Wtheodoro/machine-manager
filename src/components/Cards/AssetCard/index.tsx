import React from 'react';
import { AssetType } from '../../../store/ducks/assets/types';
import * as S from './styles';

const AssetCard: React.FC<AssetType> = ({ image, model, name,  sensors, status, healthscore, specifications, metrics}) => {
  return (
    <S.Container>
      <img src={image} alt={model} />
      <p>{name}</p>

      <div className="info">
        <p>{sensors}</p>
        <strong>{status}</strong>
        <p>{healthscore}</p>
      </div>

      <div className="specifications">
        <p>{specifications.maxTemp}</p>
        {
          specifications.power &&
          <p>{specifications.power}</p>
        }
        {
          specifications.rpm &&
          <p>{specifications.rpm}</p>

        }
      </div>

      <div className="metrics">
        <p>{metrics.totalCollectsUptime}</p>
        <p>{metrics.totalUptime}</p>
        <p>{metrics.lastUptimeAt}</p>
      </div>
    </S.Container>
  )
}

export default AssetCard;
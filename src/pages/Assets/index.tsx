import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AssetCard from '../../components/Cards/AssetCard';
import Title from '../../components/headings/Title';
import { loadGetAssetsRequest } from '../../store/ducks/assets/actions';
import { AssetType } from '../../store/ducks/assets/types';
import { pageTransition, pageVariants } from '../../assets/framerMotionAnimation'
import * as S from './styles';
import reducerTypes from '../../store/ducks/reducerTypes';
import Board from '../../components/Board';
import BarChart from '../../components/Charts/BarChart'
import MediaMatch from '../../components/MediaMatch';

interface StatusCounter {
  inAlert: number
  inOperation: number
  inDowntime: number
}

const Assets: React.FC = () => {
  const dispatch = useDispatch()
  const assetsGlobalState = useSelector((state: reducerTypes) => state.reducerAssets.assets)
  const [assets, setAssets] = useState<AssetType[]>()
  const [statusCounter, setStatusCounter] = useState<StatusCounter>()

  useEffect(() => {
    if (assetsGlobalState.length === 0) {
      dispatch(loadGetAssetsRequest())
    } else {
      setAssets(assetsGlobalState)
      setStatusCounter(statusCnt(assetsGlobalState))
    }
  }, [ assetsGlobalState, dispatch ])

  console.log(statusCounter)

  const statusCnt = (assets: AssetType[]) => {
    let inAlert = 0, inOperation = 0, inDowntime = 0

    assets?.forEach((asset: AssetType) => {
      if (asset.status === 'inAlert') {
        return inAlert++
      } else if (asset.status === 'inOperation') {
        return inOperation++
      } else if (asset.status === 'inDowntime') {
        return inDowntime++
      }
    })

    return {
      inAlert,
      inOperation,
      inDowntime
    }
  }

  return (
    <S.Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>Assets</Title>

      <S.Content>
        <div className="cards">
          {
            assets?.map((asset: AssetType) => (
              <AssetCard key={asset.id} {...asset}/>
            ))
          }
        </div>

        <Board>
          <BarChart />
        </Board>
      </S.Content>
    </S.Container>
  )
}

export default Assets;
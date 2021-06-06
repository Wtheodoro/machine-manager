import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AssetCard from '../../components/Cards/AssetCard';
import Heading from '../../components/Heading';
import { loadGetAssetsRequest } from '../../store/ducks/assets/actions';
import { AssetType } from '../../store/ducks/assets/types';
import { pageTransition, pageVariants } from '../../assets/framerMotionAnimation'
import * as S from './styles';
import reducerTypes from '../../store/ducks/reducerTypes';
import Board from '../../components/Board';
import Chart from '../../components/Chart'

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

  const statusCnt = (assets: AssetType[]) => {
    let inAlert = 0, inOperation = 0, inDowntime = 0

    assets?.map((asset: AssetType) => {
      if (asset.status === 'inAlert') {
        inAlert++
      } else if (asset.status === 'inOperation') {
        inOperation++
      } else if (asset.status === 'inDowntime') {
        inDowntime++
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
      <Heading>Assets</Heading>

      <S.Content>
        <div className="cards">
          {
            assets?.map((asset: AssetType) => (
              <AssetCard key={asset.id} {...asset}/>
            ))
          }
        </div>

        <Board>
          <p>{statusCounter?.inAlert}x</p>
          <p>{statusCounter?.inOperation}</p>
          <p>{statusCounter?.inDowntime}</p>
          <Chart />
        </Board>
      </S.Content>
    </S.Container>
  )
}

export default Assets;
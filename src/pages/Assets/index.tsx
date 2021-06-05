import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AssetCard from '../../components/Cards/AssetCard';
import Heading from '../../components/Heading';
import { loadGetAssetsRequest } from '../../store/ducks/assets/actions';
import { AssetType } from '../../store/ducks/assets/types';
import { pageTransition, pageVariants } from '../../assets/framerMotionAnimation'
import { Container } from './styles';
import reducerTypes from '../../store/ducks/reducerTypes';

const Assets: React.FC = () => {
  const dispatch = useDispatch()
  const assetsGlobalState = useSelector((state: reducerTypes) => state.reducerAssets.assets)
  const [assets, setAssets] = useState<AssetType[]>()

  useEffect(() => {
    if (assetsGlobalState.length === 0) {
      dispatch(loadGetAssetsRequest())
    } else {
      setAssets(assetsGlobalState)
    }
  }, [assetsGlobalState, dispatch])

  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Heading>Assets</Heading>
      {
        assets?.map((asset: AssetType) => (
          <AssetCard key={asset.id} {...asset}/>
        ))
      }
    </Container>
  )
}

export default Assets;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGetAssetsRequest } from '../../store/ducks/assets/actions';

import { Container } from './styles';

const Assets: React.FC = () => {
  const dispatch = useDispatch()
  const assetsGlobalState = useSelector((state: any) => state.reducerAssets.assets)
  const [assets, setAssets] = useState<any>()

  useEffect(() => {
    if (assetsGlobalState.length === 0) {
      dispatch(loadGetAssetsRequest())
      console.log("não tinha")
    } else {
      setAssets(assetsGlobalState)
    }
  }, [assetsGlobalState])


  return <Container>
    <h1>hi from assets</h1>
    {
      assets &&
      <>
      <p>{assets.length}</p>
      <p>test</p>
      </>
    }
  </Container>
}

export default Assets;
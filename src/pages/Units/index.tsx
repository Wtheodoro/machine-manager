import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';
import reducerTypes from '../../store/ducks/reducerTypes';
import { loadGetUnitsRequest } from '../../store/ducks/units/actions';
import { UnitType } from '../../store/ducks/units/types';

import { Container } from './styles';

const Units: React.FC = () => {
  const dispatch = useDispatch()
  const unitsGlobalState = useSelector((state: reducerTypes) => state.reducerUnits.units)
  const [units, setUnits] = useState<UnitType[]>()

  useEffect(() => {
    if (unitsGlobalState.length === 0) {
      dispatch(loadGetUnitsRequest())
    } else {
      setUnits(unitsGlobalState)
    }
  }, [unitsGlobalState, dispatch])

  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Hi from units</h1>

      {
        units &&
        <p>{units.length}</p>
      }
    </Container>
  )
}

export default Units;
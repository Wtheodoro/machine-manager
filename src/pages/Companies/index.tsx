import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';
import { loadGetCompaniesRequest } from '../../store/ducks/companies/actions';
import { CompanieType } from '../../store/ducks/companies/types';
import reducerTypes from '../../store/ducks/reducerTypes';

import { Container } from './styles';

const Companies: React.FC = () => {
  const dispatch = useDispatch()
  const companiesGlobalState = useSelector((state: reducerTypes) => state.reducerCompanies.companies)
  const [companies, setCompanies] = useState<CompanieType[]>()

  useEffect(() => {
    if (companiesGlobalState.length === 0) {
      dispatch(loadGetCompaniesRequest())
    } else {
      setCompanies(companiesGlobalState)
    }
  }, [companiesGlobalState, dispatch])
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>hi from Companies</h1>
      {
        companies &&
        <p>{companies.length}</p>
      }
    </Container>
  )
}

export default Companies;
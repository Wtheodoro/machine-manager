import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import Assets from '../pages/Assets'
import Companies from '../pages/Companies'
import Dashboard from '../pages/Dashboard'
import Units from '../pages/Units'
import Users from '../pages/Users'

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <AnimatePresence >
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/assets' exact component={Assets} />
            <Route path='/units' exact component={Units} />
            <Route path='/companies' exact component={Companies} />
            <Route path='/users' exact component={Users} />
        </Switch>
      </AnimatePresence>
    </Layout>  
  )   
};

export default AppRoutes;
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Assets from '../pages/Assets'
import Companies from '../pages/Companies'
import Dashboard from '../pages/Dashboard'
import Units from '../pages/Units'
import Users from '../pages/Users'

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/assets' exact component={Assets} />
            <Route path='/units' exact component={Units} />
            <Route path='/companies' exact component={Companies} />
            <Route path='/users' exact component={Users} />
        </Switch>
    </Layout>     
);

export default AppRoutes;
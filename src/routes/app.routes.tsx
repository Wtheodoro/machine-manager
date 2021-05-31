import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const AppRoutes: React.FC = () => (
    // envolver com um layout
        <Switch>
            <Route path='/' exact component={Dashboard} />
        </Switch>
);

export default AppRoutes;
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Home'
import Repository from '../pages/Repositories'
import User from '../pages/User'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/users/:user_github" component={User} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
)

export default Routes
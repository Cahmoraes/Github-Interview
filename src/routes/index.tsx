import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Notfound from '../pages/Notfound'

import Dashboard from '../pages/Home'
import Repository from '../pages/Users/Repositories'
import User from '../pages/Users'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/users/:user_github" component={User} />
    <Route path="/repositories/:repository" component={Repository} />
    <Route path="*" component={Notfound} />
  </Switch>
)

export default Routes
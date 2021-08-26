import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Props from './pages/Props/Props'
import State from './pages/State/State'
import Component from './pages/Comp_class_func/Component'
import Lifecycle from './pages/Lifecycle/Lifecycle'

const RouterView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/component" component={Component} />

      <Route path="/props" component={Props} />

      <Route path="/state" component={State} />

      <Route path="/lifecycle" component={Lifecycle} />
      <Route path="/events" />
      <Route path="/key" />
      <Route path="/refs" />
      <Route path="/requests" />
      <Route path="/fragment" />
      <Route path="/memo" />
      <Route path="/hooks" />
      <Route path="/router" />
      <Route path="/context" />

      <Route path="*">
        <div>404 Not Found</div>
      </Route>
    </Switch>
  )
}
export default RouterView

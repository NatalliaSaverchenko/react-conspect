import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Props from './pages/Props/Props'
import State from './pages/State/State'
import Component from './pages/Comp_class_func/Component'
import Lifecycle from './pages/Lifecycle/Lifecycle'
import Events from './pages/Events handling/Events'
import Methods from './components/Methods/Methods'
import MyMemo from './pages/MyMemo/MyMemo'
import Key from './pages/Key/Key'
import MyFragment from './pages/MyFragment/MyFragment'

const RouterView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/component" component={Component} />

      <Route exact path="/props" component={Props} />

      <Route exact path="/state" component={State} />

      <Route exact path="/lifecycle" component={Lifecycle} />
      <Route exact path="/lifecycle/methods" component={Methods} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/key" component={Key} />
      <Route exact path="/fragment" component={MyFragment} />
      <Route exact path="/memo" component={MyMemo} />
      <Route path="/refs" />
      <Route path="/requests" />
      <Route path="/hooks" />
      <Route path="/context" />
      <Route path="*">
        <div>404 Not Found</div>
      </Route>
    </Switch>
  )
}
export default RouterView

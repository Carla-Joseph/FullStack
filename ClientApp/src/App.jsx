import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import {AddPlayer} from './pages/AddPlayer'
import NotFound from './pages/NotFound'
import './custom.scss'


export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/players" component={HelloWorld} />
          {/* <Route exact path="/typescript" component={HeyWorld} /> */}
          <Route exact path="/addplayer" component={AddPlayer} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}

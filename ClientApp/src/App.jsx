import React, { useState, Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import { DeletePlayer } from './pages/DeletePlayer'
import { AddPlayer } from './pages/AddPlayer'
import { StealsPerGame } from './pages/SPG'
import { ReboundsPerGame } from './pages/RPG'
import { AssistsPerGame } from './pages/APG'
import './custom.scss'
import { PointsPerGame } from './pages/PPG'
// import { NavBar } from  './NavMenu/index.jsx'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/players" />
          {/* <Route exact path="/typescript" component={HeyWorld} /> */}
          <Route exact path="/addplayer">
            <AddPlayer />
          </Route>
          <Route exact path="/deleteplayer">
            <DeletePlayer />
          </Route>
          <Route exact path="/ppg">
            <PointsPerGame />
          </Route>
          <Route exact path="/rpg">
            <ReboundsPerGame />
          </Route>
          <Route exact path="/apg">
            <AssistsPerGame />
          </Route>
          <Route exact path="/spg">
            <StealsPerGame />
          </Route>
        </Switch>
      </Layout>
    )
  }
}

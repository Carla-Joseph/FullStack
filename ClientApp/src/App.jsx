import React, { useState, Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { AddPlayer } from './pages/AddPlayer'
import { StealsPerGame } from './pages/SPG'
import { ReboundsPerGame } from './pages/RPG'
import { AssistsPerGame } from './pages/APG'
import './custom.scss'
import { PointsPerGame } from './pages/PPG'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { ShowPlayers } from './pages/ShowPlayers'
import { Players } from './pages/Players'

export default class App extends Component {
  static displayName = App.name

  state = {
    searchValue: '',
  }

  setSearchValue(searchValue) {
    this.setState({
      searchValue,
    })
  }

  render() {
    return (
      <Layout setSearchValue={this.setSearchValue.bind(this)}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home searchValue={this.state.searchValue} />}
          />
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/players">
            <Players />
          </Route>
          <Route exact path="/addplayer">
            <AddPlayer />
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
          <Route exact path="/showplayers">
            <ShowPlayers />
          </Route>
        </Switch>
      </Layout>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePageDefaultBody extends Component {
  static displayName = HomePageDefaultBody.name

  getTopPointsPlayers(metricName) {
    return (
      this.props.players
        .sort((a, b) => b[metricName] - a[metricName])
        .slice(0, 5)
        .map(player => {
          const { playerName, teamName, position } = player
          const metricValue = player[[metricName]]
          return (
            <tr>
              <td>{playerName}</td>
              <td>{teamName}</td>
              <td>{position}</td>
              <td>{metricValue}</td>
            </tr>
          )
        })
    )
  }

  render() {
    const topPointsPlayers = this.getTopPointsPlayers('points')
    const topReboundsPlayers = this.getTopPointsPlayers('rebounds')
    const topStealsPlayers = this.getTopPointsPlayers('steals')
    const topAssistsPlayers = this.getTopPointsPlayers('assists')

    return (
      <div>
        <section>
          <div className="main-table">
            <Link to={`/PPG`}>
              <h1>POINTS / GAME</h1>
            </Link>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>School</th>
                  <th>Position</th>
                  <th>PPG</th>
                </tr>
              </thead>
              <tbody>{topPointsPlayers}</tbody>
            </table>
          </div>

          <div className="main-table">
            <Link to={`/RPG`}>
              <h1>REBOUNDS / GAME</h1>
            </Link>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>School</th>
                  <th>Position</th>
                  <th>RPG</th>
                </tr>
              </thead>
              <tbody>{topReboundsPlayers}</tbody>
            </table>
          </div>

          <div className="main-table">
            <Link to={`/SPG`}>
              <h1>STEALS / GAME</h1>
            </Link>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>School</th>
                  <th>Position</th>
                  <th>SPG</th>
                </tr>
              </thead>
              <tbody>{topStealsPlayers}</tbody>
            </table>
          </div>

          <div className="main-table">
            <Link to={`/APG`}>
              <h1>ASSISTS / GAME</h1>
            </Link>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>School</th>
                  <th>Position</th>
                  <th>APG</th>
                </tr>
              </thead>
              <tbody>{topAssistsPlayers}</tbody>
            </table>
          </div>
        </section>
      </div>
    )
  }
}

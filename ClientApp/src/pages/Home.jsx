import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Home(props) {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    if (players.length !== 0) {
      return
    }

    fetch('/api/Players')
      .then(response => response.json())
      .then(data => setPlayers(data))
  })

  function getTopPointsPlayers(metricName) {
    return players
      .sort((a, b) => b[metricName] - a[metricName])
      .filter(player => {
        const searchTermProcessed = props.searchValue.toLowerCase()
        return player.playerName.toLowerCase().includes(searchTermProcessed)
      })
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
  }

  const topPointsPlayers = getTopPointsPlayers('points')
  const topReboundsPlayers = getTopPointsPlayers('rebounds')
  const topStealsPlayers = getTopPointsPlayers('steals')
  const topAssistsPlayers = getTopPointsPlayers('assists')

  return (
    <>
      <div>
        <section>
          <div className="table">
            <Link to={`/PPG`}>
              <h1>POINTS PER GAME</h1>
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

          <div className="table">
            <Link to={`/RPG`}>
              <h1>REBOUNDS PER GAME</h1>
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

          <div className="table">
            <Link to={`/SPG`}>
              <h1>STEALS PER GAME</h1>
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

          <div className="table">
            <Link to={`/APG`}>
              <h1>ASSISTS PER GAME</h1>
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
    </>
  )
}

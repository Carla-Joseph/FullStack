import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    if (players.length !== 0) {
      return
    }

    fetch('https://localhost:5001/api/Players')
      .then(response => response.json())
      .then(data => setPlayers(data))
  })

  function getTopPointsPlayers(metricName) {
    return players
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
  }

  const topPointsPlayers = getTopPointsPlayers('points')
  const topReboundsPlayers = getTopPointsPlayers('rebounds')
  const topStealsPlayers = getTopPointsPlayers('steals')
  const topBlocksPlayers = getTopPointsPlayers('blocks')

  return (
    <>
      <div>
        <section>
          <div className="table">
            <h1>POINTS PER GAME</h1>
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
            <h1>REBOUNDS PER GAME</h1>
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
            <h1>STEALS PER GAME</h1>
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
            <h1>BLOCKS PER GAME</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>School</th>
                  <th>Position</th>
                  <th>BPG</th>
                </tr>
              </thead>
              <tbody>{topBlocksPlayers}</tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}

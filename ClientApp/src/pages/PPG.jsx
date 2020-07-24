import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function PointsPerGame() {
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
      .slice(0, 20)
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
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
        </ol>
      </nav>
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
        </section>
      </div>
    </>
  )
}

import React, { useState } from 'react'

export function StealsPerGame() {
  const [players, setPlayers] = useState([])

  function getTopStealsPlayers(metricName) {
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

  const topStealsPlayers = getTopStealsPlayers('steals')
  return (
    <>
      <div>
        <section>
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
        </section>
      </div>
    </>
  )
}

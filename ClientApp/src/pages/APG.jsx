import React, { useState }from 'react'

export function AssistsPerGame() {

  const [players, setPlayers] = useState([])

  function getTopAssistsPlayers(metricName) {
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

  const topAssistsPlayers = getTopAssistsPlayers('assists')
  return (
    <>
      <div>
        <section>
          <div className="table">
            <h1>ASSISTS PER GAME</h1>
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

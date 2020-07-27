import React from 'react'

export function ShowPlayers(props) {
  function getMatchedPlayers() {
    return props.players
      .sort((a, b) => b.playerName - a.playerName)
      .filter(player => {
        const searchTermProcessed = props.searchValue.toLowerCase()
        return player.playerName.toLowerCase().includes(searchTermProcessed)
      })
      .slice(0, 5)
      .map(player => {
        const {
          playerName,
          teamName,
          position,
          jerseyNumber,
          points,
          rebounds,
          assists,
          steals,
        } = player
        return (
          <tr>
            <td>{playerName}</td>
            <td>{teamName}</td>
            <td>{position}</td>
            <td>{jerseyNumber}</td>
            <td>{points}</td>
            <td>{rebounds}</td>
            <td>{assists}</td>
            <td>{steals}</td>
          </tr>
        )
      })
  }

  const matchedPlayers = getMatchedPlayers()

  return (
    <div>
      <table className="table table-hover mr-2">
        <thead>
          <tr>
            <th>Player</th>
            <th>School</th>
            <th>Position</th>
            <th>Jersey Number</th>
            <th>PPG</th>
            <th>RPG</th>
            <th>APG</th>
            <th>SPG</th>
          </tr>
        </thead>
        <tbody>
          {matchedPlayers}
        
        </tbody>
      </table>
    </div>
  )
}

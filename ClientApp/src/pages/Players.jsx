import React from 'react'
import { getUser, getUserId } from '../auth'

export class Players extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    const currentUserID = getUserId()

    fetch(`/api/Players/mine/${currentUserID}`)
      .then(response => response.json())
      .then(players => {
        this.setState({
          players,
        })
      })
  }

  getFormattedPlayers() {
    return this.state.players
      .sort((a, b) => b.playerName - a.playerName)
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

  render() {
    const formattedUsers = this.getFormattedPlayers()

    return (
      <div>
        <h2>Players on your roster</h2>
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
          <tbody>{formattedUsers}</tbody>
        </table>
      </div>
    )
  }
}

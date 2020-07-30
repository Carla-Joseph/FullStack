import React from 'react'
import { getUser, getUserId, authHeader } from '../auth'
import { useHistory, withRouter } from 'react-router'

class PlayersComponent extends React.Component {
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

  handleDelete = (event, id) => {
    event.preventDefault()

    fetch(`/api/Players/${id}`, {
      method: 'DELETE',
      headers: { ...authHeader() },
    }).then(response => {
      if (response.status === 204) {
        this.props.history.push('/')
      }
    })
  }

  getFormattedPlayers() {
    return this.state.players
      .sort((a, b) => b.playerName - a.playerName)
      .map(player => {
        const {
          id,
          playerName,
          teamName,
          position,
          jerseyNumber,
          points,
          rebounds,
          assists,
          steals,
        } = player
        console.log(id)
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
            <td>
              <button
                className="btn btn-primary btn-sm"
                onClick={event => this.handleDelete(event, id)}
              >
                Delete
              </button>
            </td>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {formattedUsers}
            <div className="form-group"></div>
          </tbody>
        </table>
      </div>
    )
  }
}

export const Players = withRouter(PlayersComponent)

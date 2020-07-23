import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function AddPlayer() {
  let [player, setPlayer] = useState({})

  function handleAddPlayer(event) {
    event.preventDefault()
    const playerStringified = JSON.stringify(player)
    fetch('https://localhost:5001/api/Players', {
      headers: {
        'content-type': 'application/json',
      },
      body: playerStringified,
      method: 'POST',
    })
  }

  function handlePlayerFieldChanged(fieldName, value) {
    const newPlayer = { ...player, [fieldName]: value }
    setPlayer(newPlayer)
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
        </ol>
      </nav>
      <div className="card">
        <div className="card-header">Add a Player</div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Player's Name"
            onChange={event =>
              handlePlayerFieldChanged('playerName', event.target.value)
            }
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Team's Name"
            onChange={event =>
              handlePlayerFieldChanged('teamName', event.target.value)
            }
          />
        </div>

        <div className="form-group">
          <select
            className="form-control"
            onChange={event =>
              handlePlayerFieldChanged('position', event.target.value)
            }
          >
            <option>PG</option>
            <option>SG</option>
            <option>SF</option>
            <option>PF</option>
            <option>C</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="int"
            className="form-control"
            id="name"
            placeholder="Jersey Number"
            onChange={event =>
              handlePlayerFieldChanged(
                'jerseyNumber',
                parseInt(event.target.value)
              )
            }
          />
        </div>

        <div className="form-group">
          <input
            type="int"
            className="form-control"
            id="name"
            placeholder="Points"
            onChange={event =>
              handlePlayerFieldChanged('points', parseInt(event.target.value))
            }
          />
        </div>

        <div className="form-group">
          <input
            type="int"
            className="form-control"
            id="name"
            placeholder="Rebounds"
            onChange={event =>
              handlePlayerFieldChanged('rebounds', parseInt(event.target.value))
            }
          />
        </div>

        <div className="form-group">
          <input
            type="int"
            className="form-control"
            id="name"
            placeholder="Blocks"
            onChange={event =>
              handlePlayerFieldChanged('blocks', parseInt(event.target.value))
            }
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="name"
            placeholder="Steals"
            onChange={event =>
              handlePlayerFieldChanged('steals', parseInt(event.target.value))
            }
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={event => handleAddPlayer(event)}
        >
          Submit
        </button>
      </div>
    </>
  )
}

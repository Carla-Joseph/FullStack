import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export function AddPlayer() {
  let [player, setPlayer] = useState({})
  let [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  function handleAddPlayer(event) {
    event.preventDefault()
    const addPlayerForm = document.getElementById('addPlayerForm')
    addPlayerForm.reportValidity()
    const playerStringified = JSON.stringify(player)
    fetch('https://localhost:5001/api/Players', {
      headers: {
        'content-type': 'application/json',
      },
      body: playerStringified,
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        addPlayerForm.reset()
        toggleModal()
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

        <form id="addPlayerForm">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Player's Name"
              required
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
              required
              onChange={event =>
                handlePlayerFieldChanged('teamName', event.target.value)
              }
            />
          </div>

          <div className="form-group">
            <select
              className="form-control position-selection"
              onChange={event =>
                handlePlayerFieldChanged('position', event.target.value)
              }
            >
              <label>Position</label>
              <option>PG</option>
              <option>SG</option>
              <option>SF</option>
              <option>PF</option>
              <option>C</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="name"
              placeholder="Jersey Number"
              required
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
              type="number"
              className="form-control"
              id="name"
              placeholder="Points"
              required
              onChange={event =>
                handlePlayerFieldChanged('points', parseInt(event.target.value))
              }
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="name"
              placeholder="Rebounds"
              onChange={event =>
                handlePlayerFieldChanged(
                  'rebounds',
                  parseInt(event.target.value)
                )
              }
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="name"
              placeholder="Blocks"
              required
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
              required
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
        </form>

        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalBody>Successfully added player</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleModal}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  )
}

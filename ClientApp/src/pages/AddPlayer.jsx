import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { getUserId } from '../auth'

export function AddPlayer() {
  let [player, setPlayer] = useState({})
  let [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  function handleAddPlayer(event) {
    event.preventDefault()
    const addPlayerForm = document.getElementById('addPlayerForm')
    addPlayerForm.reportValidity()

    const idOfCurrentUser = getUserId()
    player.creationUserID = idOfCurrentUser
    const body = JSON.stringify(player)

    fetch(`/api/Players`, {
      headers: {
        'content-type': 'application/json',
      },
      body,
      method: 'POST',
    })
      .then(response => response.json())
      .then(() => {
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
        <form id="addPlayerForm">
          <div className="card-header">Add a Player</div>
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
              <option selected className="position">Position</option>
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
              placeholder="Assists"
              required
              onChange={event =>
                handlePlayerFieldChanged(
                  'Assists',
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
              placeholder="Steals"
              required
              onChange={event =>
                handlePlayerFieldChanged('steals', parseInt(event.target.value))
              }
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={event => handleAddPlayer(event)}
            >
              Submit
            </button>
          </div>
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

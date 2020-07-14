import React from 'react'

export function AddPlayer() {
  return (
    <div className="card">
      <div className="card-header">Add a Player</div>

      <form>
        <div className="form-group">
          <label htmlFor="name">Player's Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value="Player's Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Team's Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Team's Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Position: </label>
          <select class="form-control">
            <option>PG</option>
            <option>SG</option>
            <option>SF</option>
            <option>PF</option>
            <option>C</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Player's Number: </label>
          <input
            type="int"
            className="form-control"
            id="name"
            placeholder="Jersey Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Points: </label>
          <input
            type="int"
            className="form-control"
            id="name"
            placeholder="Point"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Rebounds: </label>
          <input
            type="int"
            className="form-control"
            id="name"
            placeholder="Rebounds"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Blocks: </label>
          <input
            type="int"
            className="form-control"
            id="name"
            placeholder="Blocks"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Steals: </label>
          <input
            type="number"
            className="form-control"
            id="name"
            placeholder="Steals"
          />
        </div>
      </form>
    </div>
  )
}

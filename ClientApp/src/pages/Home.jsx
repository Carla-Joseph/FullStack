import React, { useState, useEffect } from 'react'
import HomePageDefaultBody from './HomePageDefaultBody'
import { ShowPlayers } from './ShowPlayers'

export function Home(props) {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    if (players.length !== 0) {
      return
    }

    fetch('/api/Players')
      .then(response => response.json())
      .then(data => setPlayers(data))
  })

  if (props.searchValue.length > 0) {
    // show matching players in individual player layout
    return <ShowPlayers searchValue={props.searchValue} players={players} />
  }

  // show top 5s
  return <HomePageDefaultBody players={players} />
}

import React from 'react'
import './styles.css'
import { FaTrashAlt } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css'
import api from '../../services/api'

export default ({ dev, sendDeleted }) => {


  async function handleDelete() { 

    try {
    const response = await api.delete('/devs', {data: dev})

    sendDeleted(response.data)
    } catch (error) {

    console.log("Usuário não encontrado.")
    }
  }

  function log() {
    console.log(dev)
  }

  return (

    <li className="dev-item" onClick={log}>
      <header>
        <img src={dev.avatar_url} alt={dev.name || dev.github_username} />
        <div className="user-info">
          <strong>{dev.github_username} </strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
      <button type="submit" id="delete" className="btn" onClick={handleDelete}> <FaTrashAlt /> </button>
    </li>
  )
}
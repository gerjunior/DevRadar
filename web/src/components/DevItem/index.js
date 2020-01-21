import React from 'react'
import './styles.css'
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa'
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


  function handleEdit(dev) {
    console.log(dev)
  }

  return (

    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
      <button type="submit" id="delete" className="btn" onClick={handleDelete}> <FaTrashAlt /> </button>
      <button type="submit" id="edit" className="btn" onClick={() => handleEdit(dev)}> <FaUserEdit /> </button>
    </li>
  )
}
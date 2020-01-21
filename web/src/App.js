import React, { useEffect, useState } from 'react';
import api from './services/api'

import DevItem from './components/DevItem/index'
import DevForm from './components/DevForm/index'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'


export default props => {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('./devs');

      setDevs(response.data)
    }

    loadDevs();
  }, [])

  async function handleAddDev(data) {

    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  async function reloadDevs(deleted) {

    const indexDeleted = await devs.indexOf(deleted)
    const newDevs = devs
    newDevs.splice(indexDeleted, 1)

    setDevs([...newDevs])
  }



  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem sendDeleted={(data) => reloadDevs(data)} key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  )
}
import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import patienten from '../../patienten.json'
import StatistikDia from '../Diagramm/statistik'
import StatistikBlut from '../Diagramm/statistikBlut'
import Loading from '../../Loading'

export default function PatientDetails(props) {
  const id = useParams().id
  const history = useHistory()

  const patient = patienten.find(patient => patient.id === id)

  if (!patient) { return <Loading name="Test" />; }


  const showList = () => {
    history.push('/')
  }

  return (
    <>

      <div className="ui container card">
        <table className="ui celled table column">
          <thead>
            <tr><th>Name: {patient.name}</th></tr>
            <tr><td>Adresse: {patient.adresse}</td></tr>
            <tr><td>Persönlliche Daten: {patient.persoenlicheDaten}</td></tr>
            <tr><td>Pflegegrad: {patient.rating}</td></tr>
            <tr><td>Medikamente: {patient.medikamenten}</td></tr>
            <tr><td>Ernährung: {patient.ernährung}</td></tr>
            <tr><td>Anmerkungen: {patient.anmerkungen}</td></tr>
          </thead>
        </table>
      </div>
      <div className="ui container">
        <div className="ui segment">
          <div className="ui two column very relaxed grid">
            <div className="column">
              <StatistikDia insulin={patient.insulin} gluckose={patient.gluckose} />
            </div>
            <div className="column">
              <StatistikBlut sys={patient.sys} dia={patient.dia} />
            </div>
          </div>
          <div class="ui vertical divider"></div>
        </div>
        <button onClick={showList} className="ui button">Back</button>
      </div>
    </>
  )
}


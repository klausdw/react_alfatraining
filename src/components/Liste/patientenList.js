import React, { useState } from 'react';
import PatientenListItem from './patientenListItem'
import patienten from '../../patienten.json'
import Loading from '../../Loading'
import Suchen from '../Suchen/suchen'

export default function PatientList() {
  const [filteredPatients, setFilteredPatient] = useState(patienten)

  const onFilteredPatient = (searchString) => {
    setFilteredPatient(patienten.filter(patient => {
      const searchAtt = patient.name + patient.zimmer;
      return searchAtt.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    }))
  }

  if (!patienten) { return <Loading name="Test" />; }

  return (
    <>
      <div className="ui cards segment">
        <h3>Bewohner: {patienten.length}</h3>
      </div>
        <div className="ui cards segment">
          <Suchen onFilteredPatient={onFilteredPatient} />
      </div>
      <div className="ui cards segment">
        {filteredPatients.map(patient =>
          <PatientenListItem patient={patient} key={patient.id} />
        )}
      </div>
    </>
  )
}

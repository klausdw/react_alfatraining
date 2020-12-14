import React from 'react';
import { Link } from 'react-router-dom'

export default function PatientListItem(props) {
  const patient = props.patient

  const getRatings = () => {
    return Array.apply(null, { length: patient.rating }).reduce(
      (acc, _, index) => { acc.push(index); return acc },
      []
    )
  }

  return (
    <Link to={`/patienten/${patient.id}`} className="card">
      <div className="content">
        <div className="header">
           <h4>{patient.zimmer} | {patient.name} </h4>
          <h5>Pflegegrad: 
          {getRatings().map(key => {
            return <i key={key} className="green plus square icon"></i>
          })}
          </h5>
        </div>
      </div>
 </Link>
  )
}

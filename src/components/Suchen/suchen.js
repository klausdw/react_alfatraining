import React from 'react'
import 'semantic-ui-css/semantic.min.css'


export default function Suchen(props) {
    return (
        <div className="ui search fluid">
            <div className="ui icon large input">
                <input onChange={e => props.onFilteredPatient(e.target.value)} className="prompt" type="text" placeholder="Name oder Zimmer..." />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
        </div>
    )
}

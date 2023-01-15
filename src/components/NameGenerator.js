import { useState } from 'react';
import '../styles/NameGenerator.css'
import { PersonCard, PersonCardCsv } from './PersonCard';
import React from 'react';

function NameGenerator() {
const [persons, setPersons] = useState([]);
const [displayMode, setDisplayMode] = useState('card');


function addNewLine() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => data.results[0])
        .then(person => setPersons(persons.concat([person])));
}

function deletePerson(person) {
    setPersons(persons.filter(p => p.login.uuid !== person.login.uuid))
}

function handleDisplayModeChange(e) {
    setDisplayMode(e.target.value);
}

return (
    <>
        <div className="NameGenerator">
            <div className="container">
                <h1>Name generator</h1>
                <div className="display-mode-selector">
                    <label>Display mode:</label>
                    <select value={displayMode} onChange={handleDisplayModeChange}>
                        <option value="card">Card mode</option>
                        <option value="csv">CSV mode</option>  
                    </select>
                    <button onClick={addNewLine}>Nouvelle ligne</button>  
                </div>
                <div className='persons'>
                    {displayMode === 'card' ? (
                        persons.map(person => <PersonCard key={person.login.uuid} person={person} onDelete={deletePerson} />)
                    ) : (
                        persons.map(person => <PersonCardCsv key={person.login.uuid} person={person} onDelete={deletePerson} />)
                    )}
                </div>
            </div>
        </div>
    </>
);

}

export default NameGenerator;
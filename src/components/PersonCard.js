import '../styles/PersonCard.css';
import '../styles/PersonCardCsv.css';
import React from 'react';

function PersonCard({ person, onDelete }) {
  return (
    <div className="PersonCard">
      <img src={person.picture.large} alt={person.name.first} />
        <h1>{person.name.title} {person.name.first} {person.name.last}</h1>
        <p className="title">{person.location.city}</p>
        <button onClick={() => onDelete(person)}>Delete</button>
    </div>
  );
}

function PersonCardCsv({ person, onDelete }) {
  return (
    <div className="PersonCardCsv">
        <h1>{person.gender} | {person.name.first},{person.name.last} | {person.location.city},{person.location.state},{person.location.country} | {person.email}</h1>
        <button onClick={() => onDelete(person)}>Supprimer</button>
    </div>
  );
}

export {PersonCard, PersonCardCsv};

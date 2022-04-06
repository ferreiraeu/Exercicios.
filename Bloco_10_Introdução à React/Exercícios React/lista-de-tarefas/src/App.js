import './App.css';
import React from 'react';

const compromissos = [ 'Acordo', 'Tomo café', 'Academia', 'Estudar trybe', 'Almoçar', 'Estudos até a noite']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class Lista extends React.Component {
  render() {
    return (
      <ul>{compromissos.map(objCompromisso => Task(objCompromisso))}</ul>
    )
  }
}



export default Lista;

import React from 'react';

// Function based components need the props to be passed as parameter
const Ninjas = ({ ninjas, deleteNinja }) => {

  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
        <button onClick={ () => {deleteNinja(ninja.id)} }>Delete Ninja</button>
      </div>
    ) : null;
  });

  return (
    <div className="ninja-list">
      { ninjaList }
    </div>
  );
}

export default Ninjas;

import React from 'react'

function DisplayBot({name, category, image, phrase, damage, health, armor, id, onBotClick, botClass}) {

  function handleClick() {
    onBotClick(id, botClass);
  }
  return (
    <div
      className="p-6 hover:scale-105"
      onClick={handleClick}
    >
      <div className="rounded-md shadow-lg bg-green-200 w-60">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg" src={image} alt={name} />
        </a>
        <div className="p-4">
          <div className="text-red-500 mb-2 font-medium">
            <h4 className="text-2xl">{name}</h4>
            <h5 className="text-xl">{category}</h5>
          </div>
          <p className="text-blue-700  break-words ">{phrase}</p>
          <div className="flex justify-between">
            <p>❤️: {damage}</p>
            <p>⚡: {health}</p>
            <p>🛡️: {armor}</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default DisplayBot
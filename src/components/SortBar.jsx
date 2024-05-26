import React from 'react';

const SortBar = ({ sortBots }) => {
  return (
    <div  className="flex space-x-4" >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => sortBots('health')}>Sort by Health</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => sortBots('damage')}>Sort by Damage</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => sortBots('armor')}>Sort by Armor</button>
      
    </div>
  );
};

export default SortBar;
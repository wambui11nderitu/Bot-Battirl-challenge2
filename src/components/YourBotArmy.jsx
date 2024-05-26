import React from "react";

function YourBotArmy({ army, handleDischarge, deleteBot }) {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4" >Your Bot Army</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
        {army.map((bot) => (
          <div key={bot.id} className="bg-gray-100 p-4 rounded-lg shadow-md" >
            <img src={bot.avatar_url} alt={bot.name} className="mx-auto mb-4 w-32 h-32 object-cover rounded-full" />
            <div>
              <h3 className="text-lg font-bold" >{bot.name}</h3>
              <p className="mb-2">Class: {bot.bot_class}</p>
              <p className="mb-2" >❤️: {bot.health}</p>
              <p className="mb-2" >💀: {bot.damage}</p>
              <p className="mb-2" >Armor: {bot.armor}</p>
              <div className="flex justify-center">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={() => deleteBot(bot)}> X </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDischarge(bot)}>
                Discharge
              </button>
              </div>

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;

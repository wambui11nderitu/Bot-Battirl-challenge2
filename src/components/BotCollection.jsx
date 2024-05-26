import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function BotDetails({ handleAddToArmy, }) {
  const { id } = useParams();
  const [bot, setBot] = useState({});
  const [addedToArmy, setAddedToArmy] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${id}`)
      .then(response => response.json())
      .then(data => {
        setBot(data);
      })
      .catch(error => {
        console.error('Error fetching bot details:', error);
      });
  }, [id]);

  const addToArmy = () => {
    if (!addedToArmy) {
      addToArmy(bot);
      setAddedToArmy(true); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md" >
       <h2 className="text-2xl mb-4" >Bot Details</h2>
      <img src={bot.avatar_url} alt={bot.name} className="mb-4 rounded-md" />
     
      <h3 className="text-xl font-semibold mb-2" >{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      <p>❤️: {bot.health}</p>
      <p>💀: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <div className="mt-6" >
      <Link to="/" className="text-blue-600 hover:underline mr-4" >Back</Link>
      <button onClick={addToArmy} disabled={addedToArmy} className={`px-4 py-2 rounded-md ${addedToArmy ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
        {addedToArmy ? "Checked Out" : "Add To Army"}
      </button>
      </div>
    </div>
  );
}

export default BotDetails;

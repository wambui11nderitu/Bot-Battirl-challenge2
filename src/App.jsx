import { useEffect, useState } from "react";
import DisplayBot from "./components/DisplayBot";
import NavBar from "./components/NavBar";
import SortBar from "./components/SortBar";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection"
import { Routes, Route } from "react-router-dom";
import BotCap from "./components/BotCap";

function App() {
  const [bots, setBots] = useState([]);
  const [army, botArmy] = useState([]);
  const [botClasses, setBotClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const handleAddToArmy = (bot) => {
    setArmy(prevArmy => [...prevArmy, bot]);
  };

  function handleclick(id, botClass) {
    if (botArmy.length >= 10) {
      alert("maximum limit reached");
    } else {
      if (botClass.includes(botClass)) {
        alert("member from botclass already exicts");
      } else {
        bots.map((bot) => {
          if (bot.id === id) {
            setArmy([...army, bot]);
            setBotClasses([...botClass, bot.bot_class]);
          } else {
            const updatedBots = bots.filter((bot) => bot.id !== id);
            setBots(updatedBots);
          }
        });
      }
    }
  }

  const deleteBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setArmy((prevBots) => prevBots.filter((item) => item.id !== bot.id));
        setBots((prevBots) => prevBots.filter((item) => item.id !== bot.id));
      })
      .then((data) => console.log(data));
  };

  function sortBots(property) {
    const sortedBots = bots.slice();
    sortedBots.sort((a, b) => a[property] - b[property]);
    setBots(sortedBots);
  }

  function handleDischarge(id, botClass) {
    const updatedBotClasses = botClasses.filter((bCl) => bCl !== botClass);
    setBotClasses(updatedBotClasses);
    const updatedArmy = army.filter((bot) => bot.id !== id);
    setArmy(updatedArmy);

    army.map((bot) => {
      if (bot.id === id) {
        setBots([bot, ...bots]);
      }
    });
  }

  return (
    <div className=" font-link w-screen">
      <NavBar />

      <SortBar sortBots={sortBots} />

      <YourBotArmy
        army={army}
        handleDischarge={handleDischarge}
        deleteBot={deleteBot}
      />

      <div className=" container mx-auto px-4  grid grid-cols-4 gap-4 my-10">
        {bots.map((bot) => (
          <DisplayBot
            key={bot.id}
            name={bot.name}
            image={bot.avatar_url}
            category={bot.bot_class}
            phrase={bot.catchphrase}
            damage={bot.damage}
            health={bot.health}
            armor={bot.armor}
            botClass={bot.bot_class}
            id={bot.id}
            onBotClick={handleclick}
          />
        ))}

        <Routes>
          <Route path="/" element={<BotCollection bots={bots} />} />
          <Route
            path="/bots/:id"
            element={
              <BotCap bots={bots} handleAddToArmy={handleAddToArmy} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

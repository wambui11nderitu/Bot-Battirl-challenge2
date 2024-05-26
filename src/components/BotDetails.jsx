import React from "react";
import BotCap from "./BotCap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BotCap({ bots }) {
  const BotCap = bots.map((bot) => (
    <Link
      to={`/bots/${bot.id}`}
      key={bot.id}
      className="inline-block mb-4 mr-4"
    >
      <BotCap bot={bot} />
    </Link>
  ));

  return <div className="flex flex-wrap justify-center">{BotCap}</div>;
}

export default BotCap;

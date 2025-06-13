import { use, useState } from "react";
import "./Lottery.css";
import { generateTicket, Sum } from "./helper.js";
export default function LotteryGame() {
  let [Ticket, SetTicket] = useState(generateTicket(3));
  let iswinning = Sum(Ticket);
  function BuyTicket()
  {
    SetTicket(generateTicket(3));
  }
  return (
    <>
      <h1>Lottery Game</h1>
      <div className="Ticket">
        <span>{Ticket[0]}</span>
        <span>{Ticket[1]}</span>
        <span>{Ticket[2]}</span>
      </div>
      <h1>
        {iswinning == 15
          ? "congrats you have won the lottery"
          : ""}
      </h1>
      <button onClick={BuyTicket}>Buy Again!</button>
    </>
  );
}

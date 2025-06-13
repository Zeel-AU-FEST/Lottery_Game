import { useState } from "react";
import { generateTicket, Sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import "./lottery_Revised.css"
export default function Lottery_Revised({n=3,winningsum=15})
{
    let [ticket, Setticket] = useState(generateTicket(n));
    let iswinning=Sum(ticket);
    function ticket_generator()
    {
        Setticket(generateTicket(n));
    }
    return<>
             <h1>Lottery Game</h1>
              <Ticket ticket={ticket}/>
              {
                iswinning==winningsum?<p>Congratulations You won the Lottery</p>:null
              }
             <button onClick={ticket_generator}>Buy Ticket</button>
    </>
}
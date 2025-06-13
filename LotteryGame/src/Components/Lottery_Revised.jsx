import { useState } from "react";
import { generateTicket, Sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import "./lottery_Revised.css"
export default function Lottery_Revised({n=3,winningcondition})
{
    let [ticket, Setticket] = useState(generateTicket(n));
    let iswinning=winningcondition(ticket)
    function ticket_generator()
    {
        Setticket(generateTicket(n));
    }
    return<>
             <h1>Lottery Game</h1>
              <Ticket ticket={ticket}/>
              
               { iswinning==true? <p>Congratulations You won the Lottery</p>:null}
              
             <button onClick={ticket_generator}>Buy Ticket</button>
    </>
}
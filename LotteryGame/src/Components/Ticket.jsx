import TicketNumber from "./TicketNumber.jsx";
import "./Ticket.css"
export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h2>Your Ticket!</h2>
      {ticket.map((num,idx) => (
        <TicketNumber num={num} key={idx} />
      ))}
    </div>
  );
}

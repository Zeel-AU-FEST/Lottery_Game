import './App.css'
import Lottery_Revised from "./Components/Lottery_Revised.jsx"
import TicketNumber from './Components/TicketNumber.jsx'
import Ticket from './Components/Ticket.jsx';
function App() {
  
  return <Lottery_Revised n={3} winningsum={15}></Lottery_Revised>
}
export default App

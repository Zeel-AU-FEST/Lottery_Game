import './App.css'
import Lottery_Revised from "./Components/Lottery_Revised.jsx"
import TicketNumber from './Components/TicketNumber.jsx'
import Ticket from './Components/Ticket.jsx';
import {Sum} from "./Components/helper.js"
function App() {
  let winningcondition=(ticket)=>
  { 
    return ticket[0]==0;
  }
  return <Lottery_Revised n={3} winningcondition={winningcondition}></Lottery_Revised>
}
export default App

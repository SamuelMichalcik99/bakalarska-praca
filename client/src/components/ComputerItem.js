/************************************************************
*                       COMPUTER ITEM                       *
*                                                           *
*   A component represents a computer as a single item      *
*   from a list of computers. It contains a picture, basic  *
*   parameters about the computer and two buttons.          *
*   The first button provides a listing of detailed         *
*   information about the computer. The second button is    *
*   used to include the computer in the comparison.         *
*   React-icons installed.                                  *
*                                                           *
************************************************************/

import "./ComputerItem.css"
import { Link } from "react-router-dom"
import { FaBalanceScaleLeft } from "react-icons/fa"
import { useContext} from "react";
import { GlobalContext } from "./ContextProvider"
import { SuccessNotification, WarningNotification } from "./MyToast"

export default function ComputerItem({computer}) {

  const {comparedComputers, setComparedComputers } = useContext(GlobalContext);

  async function addToComparison(id) {
    try {
      if (comparedComputers.some((computer) => computer.computer_id === id)) {
        WarningNotification();
        return;
      } else {
        const response = await fetch(`https://www.bakalarska-praca.samuelmichalcik.sk/api/computers/${id}`);
        const jsonData = await response.json();
        setComparedComputers((prev) => [...prev, jsonData]);
        SuccessNotification();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="computer-item">
      <div className="computer-item-img-container">
        <img className="computer-item-img" src={`../../images/computers/${computer.pc_case.name}.jpg`} alt="computer"/>
      </div>
      <div className="computer-item-card">
        <div className="computer-item-parameters" key={computer.computer_id}>
          <span className="computer-type">{computer.computer_usage.usage === "office" ? "Kancelársky" : "Herný/grafický"}</span>
          <span>CPU: {computer.processor.name}</span>
          <span>GPU: {computer.graphic_card.series === "integrated" ? "Integrovaná" : computer.graphic_card.series.toUpperCase()}</span>
          <span>RAM: {computer.operational_memory.memory} GB {computer.operational_memory.type}</span>
          <span>Cena: {computer.total_price}€</span>
        </div>
        <div className="computer-item-btns">
          <Link className="computer-item-detail-btn" to={`/computers/${computer.computer_id}`}>Zobraziť viac</Link>
          <button className="computer-item-compare-btn" onClick={() => addToComparison(computer.computer_id)}><FaBalanceScaleLeft size={30}/></button>
        </div>
      </div>
    </div>
  )
}

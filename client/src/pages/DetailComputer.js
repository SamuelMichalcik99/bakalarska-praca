/************************************************************
*                      DETAIL COMPUTER                      *
*                                                           *
*    A page, or component, used to display detailed         *
*    information about a particular computer. The computer  *
*    information is retrieved using a GET request to the    *
*    API endpoint according to the computer ID, which is    *
*    obtained from the URL using the useParams hook         *
*    provided by react-router-dom. The computer data is     *
*    stored using useState and output as detailed computer  *
*    parameters, visible to the user on the page.           *
*                                                           *
************************************************************/

import "./DetailComputer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailComputer() {
  const { id } = useParams();
  const [computer, setComputer] = useState({});

  useEffect(() => {
    async function getComputer() {
      try {
        const response = await fetch(`https://www.bakalarska-praca.samuelmichalcik.sk/api/computers/${id}`);
        const jsonData = await response.json();
        setComputer(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
    getComputer();
  }, [id]);
  
  /* Convert database data to slovak string. */
  function ConvertPsuCertification(currentPsuCertification) {
    var result = "Neznáma";
    switch (currentPsuCertification) {
      case "bronze":
        result = "Bronzová"
        break;

      case "gold":
        result = "Zlatá"
        break;

      case "platinum":
        result = "Platinová"
        break;

      default:
        break;
    }
    return result;
  }

  function ConvertCaseSize(currentPcCaseSize) {
    var result = "Neznáma";
    switch (currentPcCaseSize) {
      case "1":
        result = "Malá"
        break;

      case "2":
        result = "Stredná"
        break;

      case "3":
        result = "Veľká"
        break;

      default:
        break;
    }
    return result;
  }

  function ConvertCaseLighting(currentPcCaseLighting) {
    var result = "Neznáma";
    switch (currentPcCaseLighting) {
      case "1":
        result = "Žiadne"
        break;

      case "2":
        result = "LED"
        break;

      case "3":
        result = "RGB"
        break;

      case "4":
        result = "ARGB"
        break;

      default:
        break;
    }
    return result;
  }

  function ConvertMotherboardWifi(currentMotherboardWifi) {
    var result = "Neznáma";
    switch (currentMotherboardWifi) {
      case "yes":
        result = "Áno"
        break;

      case "no":
        result = "Nie"
        break;

      default:
        break;
    }
    return result;
  }

  return (
    <div id="page-body-detail-computer" className="page-body">
      {Object.keys(computer).length === 0 ? (<div><p className="empty-result">Nahrávam vybraný počítač.</p></div>) : (
        <div className="detail-computer">
          <div className="detail-computer-img-container">
            <img className="detail-computer-img" src={`../../images/computers/${computer.pc_case.name}.jpg`} alt="computer" />
            <span className="computer-type">{computer.computer_usage.usage === "office" ? "KANCELÁRSKY" : "HERNÝ/GRAFICKÝ"}</span>
            <span className="computer-type">{computer.total_price} €</span>
          </div>
          <div className="detail-computer-card">
            <div className="detail-computer-parameters" key={computer.computer_id}>
              <div className="detail-computer-parameter">
                <span>Základná&nbsp;doska:&nbsp;</span>
                <span>{computer.motherboard.name}</span>
              </div>
              <div className="detail-computer-parameter">
                <span>Procesor:&nbsp;</span>
                <span>
                  {computer.processor.manufacturer.toUpperCase()}&nbsp;
                  {computer.processor.name}<br/>
                  Frekvencia:&nbsp;{computer.processor.max_frequency}&nbsp;MHz<br/>
                  Počet&nbsp;jadier:&nbsp;{computer.processor.p_cores + computer.processor.e_cores}
                </span>
              </div>
              <div className="detail-computer-parameter">
                <span>Chladič:&nbsp;</span>
                <span>
                  {computer.cooler.name === "box" ? "Príbalový" : computer.cooler.name}<br/>
                  Typ:&nbsp;{computer.cooler.type === "air" ? "Vzduchový" : "Vodný"}
                </span>
              </div>
              <div className="detail-computer-parameter">
                <span>RAM:&nbsp;</span>
                <span>
                  {computer.operational_memory.name}<br/>
                  Pamäť:&nbsp;{computer.operational_memory.memory}&nbsp;GB<br/>
                  Frekvencia:&nbsp;{computer.operational_memory.frequency}&nbsp;MHz<br/>
                  Latencia:&nbsp;CL&nbsp;{computer.operational_memory.latency}
                </span>
              </div>
              <div className="detail-computer-parameter">
                <span>SSD:&nbsp;</span>
                <span>
                  {computer.solid_state_drive.name}<br/>
                  Veľkosť:&nbsp;{computer.solid_state_drive.memory}&nbsp;GB
                </span>
              </div>
              <div className="detail-computer-parameter">
                <span>HDD:&nbsp;</span>
                <span>
                  {computer.hard_disk_drive.name === "nodisk" ? "Neobsahuje" : computer.hard_disk_drive.name}<br/> 
                  Veľkosť:&nbsp;{computer.hard_disk_drive.memory === "0" ? "-" : computer.hard_disk_drive.memory + " GB"}
                </span>
              </div>
              <div className="detail-computer-parameter">
                <span>Grafická&nbsp;karta:&nbsp;</span>
                <span>
                  {computer.graphic_card.manufacturer.toUpperCase()}&nbsp; 
                  {(computer.graphic_card.brand === "intel" || computer.graphic_card.brand === "amd") ? 
                    "" : computer.graphic_card.brand.toUpperCase() + " "}
                  {computer.graphic_card.series === "integrated" ? "Integrovaná" : computer.graphic_card.series.toUpperCase()}&nbsp;
                  {computer.graphic_card.model === "integrated" ? "" : computer.graphic_card.model.toUpperCase()}<br/>
                  Pamäť:&nbsp;{computer.graphic_card.memory}&nbsp;GB
                </span>
              </div>
              <div className="detail-computer-parameter">
                <span>Zdroj:&nbsp;</span>
                <span>
                  {computer.power_supply.name}<br/>
                  Výkon:&nbsp;{computer.power_supply.wattage}&nbsp;W<br/>
                  Certifikácia:&nbsp;{ConvertPsuCertification(computer.power_supply.certification)} 
                </span>
              </div>
              <div className="detail-computer-parameter">
                <span>Skrinka:&nbsp;</span>
                <span>{computer.pc_case.name}</span>
              </div>
              <div className="detail-computer-parameter">
                <span>Veľkosť:&nbsp;</span>
                <span>{ConvertCaseSize(computer.pc_case.size)}</span>
              </div>
              <div className="detail-computer-parameter">
                <span>Podsvietenie:&nbsp;</span>
                <span>{ConvertCaseLighting(computer.pc_case.fan_lighting)}</span>
              </div>
              <div className="detail-computer-parameter">
                <span>Wifi:&nbsp;</span>
                <span>{ConvertMotherboardWifi(computer.motherboard.wifi)}</span>
              </div>
              <div className="detail-computer-parameter">
                <span>Kvalita&#40;1-9&#41;:&nbsp;</span>
                <span>{computer.quality_level}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

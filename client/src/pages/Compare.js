/************************************************************
*                       COMPUTERS                           *
*                                                           *
*    The Compare component is used to display the computers *
*    assigned to the comparison. It highlights in color the *
*    individual best parameters between the computers. If   *
*    some parameters of the computers are the same, it      *
*    highlights all of them at that best level. Some        *
*    parameters are not compared, they serve as additional  *
*    information.                                           *
*                                                           *
************************************************************/

import "./Compare.css";
import { useContext } from "react";
import { GlobalContext } from "../components/ContextProvider";
import { SuccessDeleteNotification, ErrorNotification } from "../components/MyToast"

export default function Compare() {

  const { comparedComputers, setComparedComputers } = useContext(GlobalContext);

  // Convert database data to slovak string.
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

  // Check which parameter of compared computers is best one.
  function isBestPrice(currentPrice) {
    return !comparedComputers.some((computer) => currentPrice > computer.total_price)
  }

  function isBestCpu(currentCpuRank) {
    return !comparedComputers.some((computer) => currentCpuRank > computer.processor.rank)
  }

  function isBestCpuCores(currentCpuCores) {
    return !comparedComputers.some((computer) => currentCpuCores < (computer.processor.p_cores + computer.processor.e_cores))
  }

  function isBestCpuFrequency(currentCpuFrequency) {
    return !comparedComputers.some((computer) => currentCpuFrequency < computer.processor.max_frequency)
  }

  function isBestRamMemory(currentRamMemory) {
    return !comparedComputers.some((computer) => currentRamMemory < computer.operational_memory.memory)
  }

  function isBestRamFrequency(currentRamFrequency) {
    return !comparedComputers.some((computer) => currentRamFrequency < computer.operational_memory.frequency)
  }

  function isBestRamLatency(currentRamLatency) {
    return !comparedComputers.some((computer) => currentRamLatency > computer.operational_memory.latency)
  }

  function isBestSsdMemory(currentSsdMemory) {
    return !comparedComputers.some((computer) => currentSsdMemory < computer.solid_state_drive.memory)
  }

  function isBestHddMemory(currentHddMemory) {
    return !comparedComputers.some((computer) => currentHddMemory < computer.hard_disk_drive.memory)
  }

  function isBestGpuMemory(currentGpuMemory) {
    return !comparedComputers.some((computer) => currentGpuMemory < computer.graphic_card.memory)
  }

  function isBestGpu(currentGpuRank) {
    return !comparedComputers.some((computer) => currentGpuRank > computer.graphic_card.rank)
  }

  function setPsuCertificationValue(psuCertification) {
    var certificationIndex = 0;
    switch (psuCertification) {
      case "bronze":
        certificationIndex = 1;
        break;

      case "gold":
        certificationIndex = 2;
        break;

      case "platinum":
        certificationIndex = 3;
        break;

      default:
        break;
    }
    return certificationIndex;
  }

  function isBestPsuCertification(currentPsuCertification) {
    return !comparedComputers.some((computer) =>
      setPsuCertificationValue(currentPsuCertification) < setPsuCertificationValue(computer.power_supply.certification))
  }

  function isBestPsuWattage(currentPsuWattage) {
    return !comparedComputers.some((computer) => currentPsuWattage < computer.power_supply.wattage)
  }

  function isBestQuality(currentQuality) {
    return !comparedComputers.some((computer) => currentQuality < computer.quality_level)
  }

  // Removing computer from comparison.
  function deleteFromComparison(id) {
    try {
      const newComparedComputers = comparedComputers.filter((computer) => computer.computer_id !== id);
      setComparedComputers(newComparedComputers);
      SuccessDeleteNotification();
    } catch (err) {
      ErrorNotification();
      console.error(err.message);
    }
  }

  if (comparedComputers.length === 0) {
    return (
      <div className="page-wrapper">
        <div id="page-body-compare" className="page-body">
          <p className="empty-result">Neboli vybrané žiadne počítače do porovnania.</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="page-wrapper">
        <div id="page-body-compare" className="page-body">
          <div className="category-heading">
            <div className="category-component">
              <h4 className="category-title">CENA</h4>
              <div className="category-parameters">
                <span className="category-parameter">Cena</span>
              </div>
            </div>
            <div className="category-component">
              <h4 className="category-title">CPU</h4>
              <div className="category-parameters">
                <span className="category-parameter">Model</span>
                <span className="category-parameter">Výrobca</span>
                <span className="category-parameter">Počet jadier</span>
                <span className="category-parameter">Max. frekvencia</span>
              </div>
            </div>
            <div className="category-component">
              <h4 className="category-title">CHLADIČ</h4>
              <div className="category-parameters">
                <span className="category-parameter">Typ chladiča</span>
              </div>
            </div>
            <div className="category-component">
              <h4 className="category-title">RAM</h4>
              <div className="category-parameters">
                <span className="category-parameter">Veľkosť</span>
                <span className="category-parameter">Typ</span>
                <span className="category-parameter">Frekvencia</span>
                <span className="category-parameter">Latencia</span>
              </div>
            </div>
            <div className="category-component">
              <h4 className="category-title">SSD</h4>
              <div className="category-parameters">
                <span className="category-parameter">Veľkosť</span>
              </div>
            </div>
            <div className="category-component">
              <h4 className="category-title">HDD</h4>
              <div className="category-parameters">
                <span className="category-parameter">Veľkosť</span>
              </div>
            </div>
            <div className="category-component">
              <h4 className="category-title">GPU</h4>
              <div className="category-parameters">
                <span className="category-parameter">Pamäť</span>
                <span className="category-parameter">Model</span>
                <span className="category-parameter">Výrobca</span>
              </div>
            </div>
            <div className="category-component">
              <h4 className="category-title">ZDROJ</h4>
              <div className="category-parameters">
                <span className="category-parameter">Certifikácia</span>
                <span className="category-parameter">Výkon</span>
              </div>
            </div>
            <div className="category-component last-component">
              <h4 className="category-title">OSTATNÉ</h4>
              <div className="category-parameters">
                <span className="category-parameter">Veľkosť skrinky</span>
                <span className="category-parameter">Podsvietenie</span>
                <span className="category-parameter">Wifi</span>
                <span className="category-parameter">Stupeň kvality</span>
              </div>
            </div>
          </div>
          <div className="compared-computers">
            {comparedComputers.map(computer => (
              <div className="compared-computer" key={computer.computer_id}>
                <div className="compared-computer-img-wrapper">
                  <img className="compared-computer-img"
                    src={`../../images/computers/${computer.pc_case.name}.jpg`}
                    alt="Computer"></img>
                </div>
                <div className="compared-parameters">
                  <div className="compared-delete-btn-wrapper">
                    <button className="compared-delete-btn" onClick={() => deleteFromComparison(computer.computer_id)}>Odstrániť</button>
                  </div>
                  <div className="compared-component">
                    <span className="category-title-row"></span>
                    <span className={isBestPrice(computer.total_price) ? "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.total_price} €
                    </span>
                  </div>
                  <div className="compared-component">
                    <span className="category-title-row"></span>
                    <span className={isBestCpu(computer.processor.rank) ? "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.processor.name}
                    </span>
                    <span className="compared-parameter">{computer.processor.manufacturer.toUpperCase()}</span>
                    <span className={isBestCpuCores(computer.processor.p_cores + computer.processor.e_cores) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.processor.p_cores + computer.processor.e_cores}
                    </span>
                    <span className={isBestCpuFrequency(computer.processor.max_frequency) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.processor.max_frequency} MHz
                    </span>
                  </div>
                  <div className="compared-component">
                    <span className="category-title-row"></span>
                    <span className="compared-parameter">{computer.cooler.type === "air" ? "Vzduchový" : "Vodný"}</span>
                  </div>
                  <div className="compared-component">
                    <span className="category-title-row"></span>
                    <span className={isBestRamMemory(computer.operational_memory.memory) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.operational_memory.memory} GB
                    </span>
                    <span className="compared-parameter">{computer.operational_memory.type}</span>
                    <span className={isBestRamFrequency(computer.operational_memory.frequency) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.operational_memory.frequency} MHz
                    </span>
                    <span className={isBestRamLatency(computer.operational_memory.latency) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      CL {computer.operational_memory.latency}
                    </span>
                  </div>
                  <div className="compared-component">
                    <span className="category-title-row"></span>
                    <span className={isBestSsdMemory(computer.solid_state_drive.memory) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.solid_state_drive.memory} GB
                    </span>
                  </div>
                  <div className="compared-component">
                    <span className="category-title-row"></span>
                    <span className={isBestHddMemory(computer.hard_disk_drive.memory) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.hard_disk_drive.memory} GB
                    </span>
                  </div>
                  <div className="compared-component">
                    <span className="category-title-row"></span>
                    <span className={isBestGpuMemory(computer.graphic_card.memory) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.graphic_card.memory} GB
                    </span>
                    <span className={isBestGpu(computer.graphic_card.rank) ? "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.graphic_card.series === "integrated" ? "Integrovaná" : computer.graphic_card.series.toUpperCase()}</span> 
                    <span className="compared-parameter">{computer.graphic_card.manufacturer.toUpperCase()}</span>
                  </div>
                  <div className="compared-component">
                    <span className="category-title-row"></span>
                    <span className={isBestPsuCertification(computer.power_supply.certification) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {ConvertPsuCertification(computer.power_supply.certification)}
                    </span>
                    <span className={isBestPsuWattage(computer.power_supply.wattage) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.power_supply.wattage} W
                    </span>
                  </div>
                  <div className="compared-component last-component">
                    <span className="category-title-row"></span>
                    <span className="compared-parameter">{ConvertCaseSize(computer.pc_case.size)}</span>
                    <span className="compared-parameter">{ConvertCaseLighting(computer.pc_case.fan_lighting)}</span>
                    <span className="compared-parameter">{ConvertMotherboardWifi(computer.motherboard.wifi)}</span>
                    <span className={isBestQuality(computer.quality_level) ?
                      "compared-parameter best-parameter" : "compared-parameter"}>
                      {computer.quality_level}
                    </span>
                  </div>
                </div> 
              </div>
            ))
            }
          </div>
        </div>
      </div>
    )
  }
}
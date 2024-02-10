/************************************************************
*                       COMPUTER FILTER                     *
*                                                           *
*    The component provides a user interface for filtering  *
*    and displaying computers. It uses useStates to store   *
*    user-specified parameters in filter input fields.      *
*    After each change, a POST request is sent to retrieve  *
*    the data from the API endpoint. The response from the  *
*    API updates the data using the "setFilteredComputers"  *
*    state and re-renders the component to display the      *
*    current list according to the specified requirements   *
*                                                           *
************************************************************/

import "./ComputerFilter.css"
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./ContextProvider"
import { FaDesktop, FaGamepad, FaSchool, FaArrowUp, FaTimes } from "react-icons/fa";
import { filterValidation } from "../lib/filterValidation"

export default function ComputerFilter({setFilteredComputers}) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(6150);

  const [usage, setUsage] = useState("");

  const [cpuManufacturers, setCpuManufacturers] = useState([]);

  const [minCpuCores, setMinCpuCores] = useState(0);
  const [maxCpuCores, setMaxCpuCores] = useState(24);

  const [coolerTypes, setCoolerTypes] = useState([]);

  const [ramTypes, setRamTypes] = useState([]);

  const [minRamMemory, setMinRamMemory] = useState(0);
  const [maxRamMemory, setMaxRamMemory] = useState(64);

  const [minSsdMemory, setMinSsdMemory] = useState(0);
  const [maxSsdMemory, setMaxSsdMemory] = useState(2000);

  const [minHddMemory, setMinHddMemory] = useState(0);
  const [maxHddMemory, setMaxHddMemory] = useState(8000);

  const [gpuManufacturers, setGpuManufacturers] = useState([]);

  const [minGpuMemory, setMinGpuMemory] = useState(0);
  const [maxGpuMemory, setMaxGpuMemory] = useState(24);

  const [psuCertification, setPsuCertification] = useState([]);

  const [minPsuWattage, setMinPsuWattage] = useState(0);
  const [maxPsuWattage, setMaxPsuWattage] = useState(1300);

  const [caseSize, setCaseSize] = useState([]);
  const [caseLighting, setCaseLighting] = useState([]);



  useEffect(() => {
    /* Store input filters and call POST request from API. */
    async function filterComputers() {
      const data = {
        price: [minPrice, maxPrice],
        usage: usage,
        cpu_manufacturers: cpuManufacturers,
        cpu_cores: [minCpuCores, maxCpuCores],
        cooler_types: coolerTypes,
        ram_types: ramTypes,
        ram_memory: [minRamMemory, maxRamMemory],
        ssd_memory: [minSsdMemory, maxSsdMemory],
        hdd_memory: [minHddMemory, maxHddMemory],
        gpu_manufacturers: gpuManufacturers,
        gpu_memory: [minGpuMemory, maxGpuMemory],
        psu_certification: psuCertification,
        psu_wattage: [minPsuWattage, maxPsuWattage],
        case_size: caseSize,
        case_lighting: caseLighting
      }

      try {
        const response = await fetch("https://www.bakalarska-praca.samuelmichalcik.sk/api/filtered-computers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        setFilteredComputers(result);
      } catch (error) {
        console.log(error);
      }
    }

    filterComputers();

  }, [minPrice, maxPrice, usage, 
      cpuManufacturers, minCpuCores, maxCpuCores, 
      coolerTypes, 
      ramTypes, minRamMemory, maxRamMemory, 
      minSsdMemory, maxSsdMemory, 
      minHddMemory, maxHddMemory, 
      gpuManufacturers, minGpuMemory, maxGpuMemory,
      psuCertification, minPsuWattage, maxPsuWattage,
    caseSize, caseLighting, setFilteredComputers ]
    )

  const {openFilter, setOpenFilter} = useContext(GlobalContext);

  return (
    <div id="computer-filter" className={openFilter ? null : "computer-filter-closed"}>
      <button id="filter-hide-btn" onClick={() => setOpenFilter(false)}><FaTimes size={20} /></button>

      {/* usage */}
      <div className="filter-block">
        <p className="filter-title">Využitie PC</p>
        <div className="radio-container">
          <input
            type="radio"
            id="filter-usage-all"
            className="input-radio"
            checked={usage === ""}
            onChange={(e) => {
              setUsage("");
            }}
          />
          <FaDesktop size={25}></FaDesktop>
          <label className="radio-label" htmlFor="filter-usage-office">Akékoľvek</label>
        </div>
        <div className="radio-container">
          <input
            type="radio"
            id="filter-usage-office"
            className="input-radio"
            checked={usage === "office"}
            onChange={(e) => {
              setUsage("office");
            }}
          />
          <FaSchool size={25}></FaSchool>
          <label className="radio-label" htmlFor="filter-usage-office">Kancelársky</label>
        </div>
        <div className="radio-container">
          <input
            type="radio"
            id="filter-usage-gpu"
            className="input-radio"
            checked={usage === "gpu"}
            onChange={(e) => {
              setUsage("gpu");
            }}
          />
          <FaGamepad size={25}></FaGamepad>
          <label className="radio-label" htmlFor="filter-usage-gpu">Herný/grafický</label>
        </div>
      </div>


      {/* price */}
      <div className="filter-block">
        <p className="filter-title">Cena</p>
        <div>
          <label className="textfield-label" htmlFor="filter-min-price">Od:</label>
          <input
            type="number"
            min="0"
            max="6150"
            step="5"
            name="filter-min-price"
            id="filter-min-price"
            className="input-field"
            value={minPrice}
            onChange={(e) => {
              var siblingInput = "filter-max-price";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMinPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="textfield-label" htmlFor="filter-max-price">Do:</label>
          <input
            type="number"
            min="0"
            max="6150"
            step="5"
            name="filter-max-price"
            id="filter-max-price"
            className="input-field"
            value={maxPrice}
            onChange={(e) => {
              var siblingInput = "filter-min-price";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMaxPrice(e.target.value)
            }}
          />
        </div>
      </div>


      {/* cpu */}      
      <div className="filter-block">
        <p className="filter-title">Výrobca CPU</p>
        <div>
          <input
            type="checkbox"
            name="filter-cpu-intel"
            id="filter-cpu-intel"
            className="input-checkbox"
            value={cpuManufacturers.includes("intel")}
            onChange={(e) => setCpuManufacturers((prev) => e.target.checked ? ["intel", ...prev] : prev.filter((x) => x !== "intel"))}
          />
          <label className="check-label" htmlFor="filter-cpu-intel">Intel</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-cpu-amd"
            id="filter-cpu-amd"
            className="input-checkbox"
            value={cpuManufacturers.includes("amd")}
            onChange={(e) => setCpuManufacturers((prev) => e.target.checked ? ["amd", ...prev] : prev.filter((x) => x !== "amd"))}
          />
          <label className="check-label" htmlFor="filter-cpu-amd">AMD</label>
        </div>
      </div>

      <div className="filter-block">
        <p className="filter-title">Počet jadier CPU</p>
        <div>
          <label className="textfield-label" htmlFor="filter-min-cpu-cores">Od:</label>
          <input
            type="number"
            min="0"
            max="24"
            step="2"
            name="filter-min-cpu-cores"
            id="filter-min-cpu-cores"
            className="input-field"
            value={minCpuCores}
            onChange={(e) => {
              var siblingInput = "filter-max-cpu-cores";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMinCpuCores(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="textfield-label" htmlFor="filter-max-cpu-cores">Do:</label>
          <input
            type="number"
            min="0"
            max="24"
            step="2"
            name="filter-max-cpu-cores"
            id="filter-max-cpu-cores"
            className="input-field"
            value={maxCpuCores}
            onChange={(e) => {
              var siblingInput = "filter-min-cpu-cores";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMaxCpuCores(e.target.value);
            }}
          />
        </div>
      </div>


      {/* cooler */}
      <div className="filter-block">
        <p className="filter-title">Chladenie CPU</p>
        <div>
          <input
            type="checkbox"
            name="filter-cooler-air"
            id="filter-cooler-air"
            className="input-checkbox"
            value={coolerTypes.includes("air")}
            onChange={(e) => setCoolerTypes((prev) => e.target.checked ? ["air", ...prev] : prev.filter((x) => x !== "air"))}
          />
          <label className="check-label" htmlFor="filter-cooler-air">Vzduchom</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-cooler-aio"
            id="filter-cooler-aio"
            className="input-checkbox"
            value={coolerTypes.includes("liquid aio")}
            onChange={(e) => setCoolerTypes((prev) => e.target.checked ? ["liquid aio", ...prev] : prev.filter((x) => x !== "liquid aio"))}
          />          
          <label className="check-label" htmlFor="filter-cooler-aio">Vodou</label>
        </div>
      </div>


      {/* ram */}
      <div className="filter-block">
        <p className="filter-title">Typ RAM</p>
        <div>
          <input
            type="checkbox"
            name="filter-ram-ddr4"
            id="filter-ram-ddr4"
            className="input-checkbox"
            value={ramTypes.includes("ddr4")}
            onChange={(e) => setRamTypes((prev) => e.target.checked ? ["ddr4", ...prev] : prev.filter((x) => x !== "ddr4"))}
          />
          <label className="check-label" htmlFor="filter-ram-ddr4">DDR4</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-ram-ddr5"
            id="filter-ram-ddr5"
            className="input-checkbox"
            value={ramTypes.includes("ddr5")}
            onChange={(e) => setRamTypes((prev) => e.target.checked ? ["ddr5", ...prev] : prev.filter((x) => x !== "ddr5"))}
          />
          <label className="check-label" htmlFor="filter-ram-ddr5">DDR5</label>
        </div>
      </div>

      <div className="filter-block">
        <p className="filter-title">Veľkosť RAM</p>
        <div>
          <label className="textfield-label" htmlFor="filter-min-ram-memory">Od:</label>
          <input
            type="number"
            min="0"
            max="64"
            step="8"
            name="filter-min-ram-memory"
            id="filter-min-ram-memory"
            className="input-field"
            value={minRamMemory}
            onChange={(e) => {
              var siblingInput = "filter-max-ram-memory";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMinRamMemory(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="textfield-label" htmlFor="filter-max-ram-memory">Do:</label>
          <input
            type="number"
            min="0"
            max="64"
            step="8"
            name="filter-max-ram-memory"
            id="filter-max-ram-memory"
            className="input-field"
            defaultValue={maxRamMemory}
            onChange={(e) => {
              var siblingInput = "filter-min-ram-memory";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMaxRamMemory(e.target.value)
            }}
          />
        </div>
      </div>


      {/* ssd */}
      <div className="filter-block">
        <p className="filter-title">Veľkosť SSD</p>
        <div>
          <label className="textfield-label" htmlFor="filter-min-ssd-memory">Od:</label>
          <input
            type="number"
            min="0"
            max="2000"
            step="250"
            name="filter-min-ssd-memory"
            id="filter-min-ssd-memory"
            className="input-field"
            defaultValue={minSsdMemory}
            onChange={(e) => {
              var siblingInput = "filter-max-ssd-memory";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMinSsdMemory(e.target.value)
            }}
          />
        </div>
        <div>
          <label className="textfield-label" htmlFor="filter-max-ssd-memory">Do:</label>
          <input
            type="number"
            min="0"
            max="2000"
            step="250"
            name="filter-max-ssd-memory"
            id="filter-max-ssd-memory"
            className="input-field"
            defaultValue={maxSsdMemory}
            onChange={(e) => {
              var siblingInput = "filter-min-ssd-memory";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMaxSsdMemory(e.target.value)
            }}
          />
        </div>
      </div>


      {/* hdd */}
      <div className="filter-block">
        <p className="filter-title">Veľkosť HDD</p>
        <div>
          <label className="textfield-label" htmlFor="filter-min-hdd-memory">Od:</label>
          <input
            type="number"
            min="0"
            max="8000"
            step="1000"
            name="filter-min-hdd-memory"
            id="filter-min-hdd-memory"
            className="input-field"
            defaultValue={minHddMemory}
            onChange={(e) => {
              var siblingInput = "filter-max-hdd-memory";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMinHddMemory(e.target.value)
            }}
          />
        </div>
        <div>
          <label className="textfield-label" htmlFor="filter-max-hdd-memory">Do:</label>
          <input
            type="number"
            min="0"
            max="8000"
            step="1000"
            name="filter-max-hdd-memory"
            id="filter-max-hdd-memory"
            className="input-field"
            defaultValue={maxHddMemory}
            onChange={(e) => {
              var siblingInput = "filter-min-hdd-memory";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMaxHddMemory(e.target.value)
            }}
          />
        </div>
      </div>


      {/* gpu */}
      <div className="filter-block">
        <p className="filter-title">Výrobca GPU</p>
        <div>
          <input
            type="checkbox"
            name="filter-gpu-nvidia"
            id="filter-gpu-nvidia"
            className="input-checkbox"
            value={gpuManufacturers.includes("nvidia")}
            disabled={usage === "office" || usage === ""}
            onChange={(e) => setGpuManufacturers((prev) => e.target.checked ? ["nvidia", ...prev] : prev.filter((x) => x !== "nvidia"))}
          />
          <label className="check-label" htmlFor="filter-gpu-nvidia">NVIDIA</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-gpu-amd"
            id="filter-gpu-amd"
            className="input-checkbox"
            value={gpuManufacturers.includes("amd")}
            disabled={usage === "office" || usage === ""}
            onChange={(e) => setGpuManufacturers((prev) => e.target.checked ? ["amd", ...prev] : prev.filter((x) => x !== "amd"))}
          />
          <label className="check-label" htmlFor="filter-gpu-amd">AMD</label>
        </div>
      </div>

      <div className="filter-block">
        <p className="filter-title">Pamäť GPU</p>
        <div>
          <label className="textfield-label" htmlFor="filter-min-gpu-memory">Od:</label>
          <input
            type="number"
            min="0"
            max="24"
            step="1"
            name="filter-min-gpu-memory"
            id="filter-min-gpu-memory"
            className="input-field"
            value={minGpuMemory}
            disabled={usage === "office" || usage === ""}
            onChange={(e) => {
              var siblingInput = "filter-max-gpu-memory";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMinGpuMemory(e.target.value)
            }}
          />
        </div>
        <div>
          <label className="textfield-label" htmlFor="filter-max-gpu-memory">Do:</label>
          <input
            type="number"
            min="3"
            max="24"
            step="1"
            name="filter-max-gpu-memory"
            id="filter-max-gpu-memory"
            className="input-field"
            value={maxGpuMemory}
            disabled={usage === "office" || usage === ""}
            onChange={(e) => {
              var siblingInput = "filter-min-gpu-memory";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMaxGpuMemory(e.target.value)
            }}
          />
        </div>
      </div>


      {/* psu */}
      <div className="filter-block">
        <p className="filter-title">Certifikácia PSU</p>
        <div>
          <input
            type="checkbox"
            name="filter-psu-certification-br"
            id="filter-psu-certification-br"
            className="input-checkbox"
            value={psuCertification.includes("bronze")}
            onChange={(e) => setPsuCertification((prev) => e.target.checked ? ["bronze", ...prev] : prev.filter((x) => x !== "bronze"))}
          />
          <label className="check-label" htmlFor="filter-psu-certification-br">Bronzová</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-psu-certification-gd"
            id="filter-psu-certification-gd"
            className="input-checkbox"
            value={psuCertification.includes("gold")}
            onChange={(e) => setPsuCertification((prev) => e.target.checked ? ["gold", ...prev] : prev.filter((x) => x !== "gold"))}
          />
          <label className="check-label" htmlFor="filter-psu-certification-gd">Zlatá</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-psu-certification-pt"
            id="filter-psu-certification-pt"
            className="input-checkbox"
            value={psuCertification.includes("platinum")}
            onChange={(e) => setPsuCertification((prev) => e.target.checked ? ["platinum", ...prev] : prev.filter((x) => x !== "platinum"))}
          />
          <label className="check-label" htmlFor="filter-psu-certification-pt">Platinová</label>
        </div>
      </div>

      <div className="filter-block">
        <p className="filter-title">Výkon PSU</p>
        <div>
          <label className="textfield-label" htmlFor="filter-min-psu-wattage">Od:</label>
          <input
            type="number"
            min="0"
            max="1300"
            step="50"
            name="filter-min-psu-wattage"
            id="filter-min-psu-wattage"
            className="input-field"
            value={minPsuWattage}
            onChange={(e) => {
              var siblingInput = "filter-max-psu-wattage";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMinPsuWattage(e.target.value)
            }}
          />
        </div>
        <div>
          <label className="textfield-label" htmlFor="filter-max-psu-wattage">Do:</label>
          <input
            type="number"
            min="0"
            max="1300"
            step="50"
            name="filter-max-psu-wattage"
            id="filter-max-psu-wattage"
            className="input-field"
            value={maxPsuWattage}
            onChange={(e) => {
              var siblingInput = "filter-min-psu-wattage";
              filterValidation(siblingInput, e.target.id, e.target.min, e.target.max, e.target.value)
              setMaxPsuWattage(e.target.value)
            }}
          />
        </div>
      </div>


      {/* case */}
      <div className="filter-block">
        <p className="filter-title">Veľkosť skrinky</p>
        <div>
          <input
            type="checkbox"
            name="filter-case-size-s"
            id="filter-case-size-s"
            className="input-checkbox"
            value={caseSize.includes("1")}
            onChange={(e) => setCaseSize((prev) => e.target.checked ? ["1", ...prev] : prev.filter((x) => x !== "1"))}
          />
          <label className="check-label" htmlFor="filter-case-size-s">Malá</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-case-size-m"
            id="filter-case-size-m"
            className="input-checkbox"
            value={caseSize.includes("2")}
            onChange={(e) => setCaseSize((prev) => e.target.checked ? ["2", ...prev] : prev.filter((x) => x !== "2"))}
          />
          <label className="check-label" htmlFor="filter-case-size-m">Stredná</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-case-size-l"
            id="filter-case-size-l"
            className="input-checkbox"
            value={caseSize.includes("3")}
            onChange={(e) => setCaseSize((prev) => e.target.checked ? ["3", ...prev] : prev.filter((x) => x !== "3"))}
          />
          <label className="check-label" htmlFor="filter-case-size-l">Veľká</label>
        </div>
      </div>

      <div className="filter-block">
        <p className="filter-title">Podsvietenie</p>
        <div>
          <input
            type="checkbox"
            name="filter-case-lighting-none"
            id="filter-case-lighting-none"
            className="input-checkbox"
            value={caseLighting.includes("1")}
            onChange={(e) => setCaseLighting((prev) => e.target.checked ? ["1", ...prev] : prev.filter((x) => x !== "1"))}
          />
          <label className="check-label" htmlFor="filter-case-lighting-none">Žiadne</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-case-lighting-led"
            id="filter-case-lighting-led"
            className="input-checkbox"
            value={caseLighting.includes("2")}
            onChange={(e) => setCaseLighting((prev) => e.target.checked ? ["2", ...prev] : prev.filter((x) => x !== "2"))}
          />
          <label className="check-label" htmlFor="filter-case-lighting-led">LED</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-case-lighting-rgb"
            id="filter-case-lighting-rgb"
            className="input-checkbox"
            value={caseLighting.includes("3")}
            onChange={(e) => setCaseLighting((prev) => e.target.checked ? ["3", ...prev] : prev.filter((x) => x !== "3"))}
          />
          <label className="check-label" htmlFor="filter-case-lighting-rgb">RGB</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-case-lighting-argb"
            id="filter-case-lighting-argb"
            className="input-checkbox"
            value={caseLighting.includes("4")}
            onChange={(e) => setCaseLighting((prev) => e.target.checked ? ["4", ...prev] : prev.filter((x) => x !== "4"))}
          />
          <label className="check-label" htmlFor="filter-case-lighting-argb">ARGB</label>
        </div>
      </div>

      <button id="scroll-top-filter-btn" onClick={() => document.getElementById("computer-filter").scrollTop = 0}><FaArrowUp size={20}></FaArrowUp></button>
    </div>
  )
}

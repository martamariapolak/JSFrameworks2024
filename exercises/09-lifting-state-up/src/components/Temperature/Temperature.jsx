import { useState } from "react";
import "./Temperature.css";

import TemperatureDisplay from "../TemperatureDisplay/TemperatureDisplay";
import TemperatureScale from "../TemperatureScale/TemperatureScale";

const CURRENT_TEMPERATURE_CELSIUS = 3;

function Temperature() {
 
  const [scale, setScale] = useState("F");
 
  const temperature =
    scale === "F"
      ? CURRENT_TEMPERATURE_CELSIUS * 1.8 + 32
      : CURRENT_TEMPERATURE_CELSIUS;

  return (
    <div className="Temperature flex-inline text-center">
      <div className="card card-body">
        <div className="mb-3">
          {/* START Move this into <TemperatureDisplay />. (You will see errors and have to fix them when you do this). */}
          
          {/* END */}
         

          {/* Pass props to <TemperatureDisplay /> */}
          <TemperatureDisplay temperature={temperature} scale={scale} />
        </div>
        {/* START Move this into <TemperatureScale />. (You will see errors and have to fix them when you do this). */}
        
        {/* END */}

        {/* Pass props to <TemperatureScale /> */}
        <TemperatureScale setScale={setScale} />
      </div>
    </div>
  );
}

export default Temperature;

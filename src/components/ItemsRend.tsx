import React from "react";
import Info, {InfoType} from "../data/Info";
import RendData from "./RendData";


const Work: React.FC=()=>{
    return(

    <div>
        {Info.map((info:InfoType, index: number) =>(
            <RendData 
            key={`${info.Country}-${info.Year}`}
            Count={info.Country}
            Year={info.Year}
            Crop={info["Crop Name"] || "0"}
            Produce={info["Crop Production (UOM:t(Tonnes))"] ?? 0}
            Yields={info["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] ?? 0}
            Area={info["Area Under Cultivation (UOM:Ha(Hectares))"] ?? 0}

            />

        ))}
    </div>

    )
}

export default Work;
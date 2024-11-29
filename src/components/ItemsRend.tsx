import { Button, Table } from "@mantine/core";
import React, { useState } from "react";

const Work: React.FC=()=>{
  const [button,SetButton]=useState<"A"|"B"|"Reset">("Reset");


  function RenderTables(){
   if(Button==="A") return getMaxMinTable();
   if(Button==="B") return AvgTable();
   
  }
return(
  <>
  {/* Buttons */}
  <button onClick={()=>SetButton("A")}>A</button>
  <button onClick={()=>SetButton("B")}>B</button>
  <button onClick={()=>SetButton("Reset")}>Reset</button>

  <Table>
    <Table.Thead>
      {button==="A" && (
        <>
        <Table.Th>Year</Table.Th>
        <Table.Th>Max Production Crop</Table.Th>
        <Table.Th>Min Production Crop</Table.Th>
        </>
      )}
      {button==="B" &&(
        <>
        <Table.Th>Crop</Table.Th>
        <Table.Th>Average Yield</Table.Th>
        <Table.Th>Average Cultivation Area</Table.Th>
        </>
      )}
      {button==="Reset" &&(
        <>
        <Table.Th>Index</Table.Th>
        <Table.Th>Country</Table.Th>
        <Table.Th>Year</Table.Th>
        <Table.Th>Crop Name</Table.Th>
        <Table.Th>Crop Production</Table.Th>
        <Table.Th>Yield Of Crops</Table.Th>
        <Table.Th>Area Under Cultivation</Table.Th>
        </>
      )}
    </Table.Thead>
    <Table.Tbody>{RenderTables()}</Table.Tbody>
  </Table>
  </>
)
}
export default Work;
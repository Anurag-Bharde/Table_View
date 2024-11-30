import React, { useState } from "react";
import Info, { InfoType } from "../data/Info";
import { Table, Button, Group } from "@mantine/core";


const Work: React.FC = () => {
  const [tableType, setTableType] = useState<"A" | "B" | "RESET">("RESET");

  // Helper function to get Max/Min Production Table
  const getMaxMinProductionTable = () => {
    const aggregated = Info.reduce((acc, curr) => {
      const year = curr.Year;
      const production = Number(curr["Crop Production (UOM:t(Tonnes))"]) || 0;
      if (!acc[year]) acc[year] = { max: curr, min: curr };
      if (production > (Number(acc[year].max["Crop Production (UOM:t(Tonnes))"]) || 0)) acc[year].max = curr;
      if (production < (Number(acc[year].min["Crop Production (UOM:t(Tonnes))"]) || Infinity)) acc[year].min = curr;
      return acc;
    }, {} as Record<string, { max: InfoType; min: InfoType }>);

    return Object.entries(aggregated).map(([year, { max, min }]) => (
      <Table.Tr key={year} style={{ textAlign: "center" }}>
        <Table.Td>{year}</Table.Td>
        <Table.Td>{max["Crop Name"]}</Table.Td>
        <Table.Td>{min["Crop Name"]}</Table.Td>
      </Table.Tr>
    ));
  };

  // Helper function to get Average Table
  const getAverageTable = () => {
    const aggregated = Info.reduce((acc, curr) => {
      const crop = curr["Crop Name"];
      const yieldValue = Number(curr["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0;
      const area = Number(curr["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0;

      if (!acc[crop]) acc[crop] = { totalYield: 0, totalArea: 0, count: 0 };
      acc[crop].totalYield += yieldValue;
      acc[crop].totalArea += area;
      acc[crop].count += 1;

      return acc;
    }, {} as Record<string, { totalYield: number; totalArea: number; count: number }>);

    return Object.entries(aggregated).map(([crop, { totalYield, totalArea, count }]) => (
      <Table.Tr key={crop} style={{ textAlign: "center" }}>
        <Table.Td>{crop}</Table.Td>
        <Table.Td>{(totalYield / count).toFixed(2)}</Table.Td>
        <Table.Td>{(totalArea / count).toFixed(2)}</Table.Td>
      </Table.Tr>
    ));
  };

  // Render table rows based on selected type
  const renderTableRows = () => {
    if (tableType === "A") return getMaxMinProductionTable();
    if (tableType === "B") return getAverageTable();
    return Info.map((info, index) => (
      <Table.Tr key={index} style={{ textAlign: "center" }} >
        <Table.Td >{index + 1}</Table.Td>
        <Table.Td >{info.Country}</Table.Td>
        <Table.Td >{info.Year}</Table.Td>
        
       <Table.Td >{info["Crop Name"]}</Table.Td>
        <Table.Td >{info["Crop Production (UOM:t(Tonnes))"] || 0}</Table.Td>
        <Table.Td >{info["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0}</Table.Td>
        <Table.Td>{info["Area Under Cultivation (UOM:Ha(Hectares))"] || 0}</Table.Td>
      </Table.Tr>
    ));
  };

  return (
    <div>
      {/* Buttons */}
      <Group mb="md"  style={{display:"flex", justifyContent:"center"}}>
        <Button style={{padding:"5px", }} onClick={() => setTableType("A")}>Show Max/Min Production</Button>
        <Button style={{padding:"5px", marginLeft:"12px", marginRight:"12px"}} onClick={() => setTableType("B")}>Show Average Table</Button>
        <Button style={{padding:"5px" }} onClick={() => setTableType("RESET")}>Reset</Button>
      </Group>

      {/* Table */}
      <Table style={{width:"100%"}}>
        <Table.Thead>
          <Table.Tr>
            {tableType === "A" && (
              <>
                <Table.Th>Year</Table.Th>
                <Table.Th>Max Production Crop</Table.Th>
                <Table.Th>Min Production Crop</Table.Th>
              </>
            )}
            {tableType === "B" && (
              <>
                <Table.Th>Crop</Table.Th>
                <Table.Th>Average Yield</Table.Th>
                <Table.Th>Average Cultivation Area</Table.Th>
              </>
            )}
            {tableType === "RESET" && (
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
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody >{renderTableRows()}</Table.Tbody>
      </Table>
    </div>
  );
};

export default Work;

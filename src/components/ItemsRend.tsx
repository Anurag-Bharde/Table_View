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
      <Table.Tr key={year}>
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
      <Table.Tr key={crop}>
        <Table.Td>{crop}</Table.Td>
        <Table.Td>{(totalYield / count).toFixed(2)}</Table.Td>
        <Table.Td>{(totalArea / count).toFixed(2)}</Table.Td>
      </Table.Tr>
    ));
  };

  // Render table rows based on selected type
 

  return (
    <div>
    
    </div>
  );
};

export default Work;

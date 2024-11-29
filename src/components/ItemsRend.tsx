import React from "react";
import Info, {InfoType} from "../data/Info";

import { Table } from "@mantine/core";


const Work: React.FC=()=>{
    let index:number=0;
    const rows=Info.map((info:InfoType)=>(
        <Table.Tr key={index++}>
            <Table.Td>{info.Country}</Table.Td>
            <Table.Td>{info.Year}</Table.Td>
            <Table.Td>{info["Crop Name"] || "0"}</Table.Td>
            <Table.Td>{info["Crop Production (UOM:t(Tonnes))"] || 0}</Table.Td>
            <Table.Td>{info["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0}</Table.Td>
            <Table.Td>{info["Area Under Cultivation (UOM:Ha(Hectares))"] || 0}</Table.Td>
        </Table.Tr>
    ))
    return(

        <Table striped highlightOnHover withColumnBorders>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Country</Table.Th>
                    <Table.Th>Year</Table.Th>
                    <Table.Th>Crop Name</Table.Th>
                    <Table.Th>Crop Production (UOM:t(Tonnes))</Table.Th>
                    <Table.Th>Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))</Table.Th>
                    <Table.Th>Area Under Cultivation (UOM:Ha(Hectares))</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>

    )
}

export default Work;
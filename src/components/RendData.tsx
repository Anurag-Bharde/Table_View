import React from 'react'
interface RendDataProps{
  Count:string;
  Year:string;
  Crop:string;
  Produce:number;
  Yields:number;
  Area:number;
}

const RendData:React.FC<RendDataProps>= ({Count,Year,Crop,Produce,Yields,Area}) => {
  return (
    <div>
      <h6>{Count}</h6>
      <h6>{Year}</h6>
      <h6>{Crop}</h6>
      <h6>{Produce}</h6>
      <h6>{Yields}</h6>
      <h6>{Area}</h6>
    </div>
  )
}

export default RendData

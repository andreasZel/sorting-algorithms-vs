import "../css/AlgorithmLegend.css";
import Bar from "./Bar";
import InsertionSort from "../functions/InsertionSort";

import { useState } from "react";

interface Props {
  algorithm_name: string;
  data: number[];
}

const AlgorithmLegend = ({ algorithm_name, data }: Props) => {
  const [bars, changebars] = useState<number[]>(data);
  const [ishover, swaphover] = useState<boolean>(false);

  let barArray = bars.map((item, index) => {
    return (
        <Bar 
        key={index}
        inputStyle={
            {
            backgroundColor: "red", 
            width: `${400/bars.length}px`, 
            height: `${(340*item)/Math.max(...bars)}px`,
        }}/>
    )
  })

  return (
    <div className="algorithm_legend">
      <button id="legend_title"
      onMouseEnter={() => swaphover(true)}
      onMouseLeave={() => swaphover(false)}
      onClick={() => InsertionSort({bars, changebars})}
      >{ishover === true ? "Run algorithm" : algorithm_name}</button>
      <div id="display_array">
        {barArray}
      </div>
    </div>
  );
};

export default AlgorithmLegend;

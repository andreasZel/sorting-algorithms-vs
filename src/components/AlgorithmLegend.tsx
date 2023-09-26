import "../css/AlgorithmLegend.css";
import Bar from "./Bar.tsx";
import InsertionSort from "../functions/InsertionSort";

import { useState, useEffect } from "react";

interface Props {
  algorithm_name: string;
  data: number[];
}

const AlgorithmLegend = ({ algorithm_name, data }: Props) => {

  const [bars, changebars] = useState<number[]>(data);
  const [ishover, swaphover] = useState<boolean>(false);
  const [barArray, updatebarArray] = useState<React.ReactElement[]>([<Bar key={1} inputStyle={{
    backgroundColor: "#ffd700", 
    width: `${400/bars.length}px`, 
    height: `${(340*1)/Math.max(...bars)}px`,
  }}/>]);

  useEffect( () => {
    let temparray = bars.map((item, index) => {
      return (
          <Bar 
          key={index}
          inputStyle={
              {
              backgroundColor: "#ffd700", 
              width: `${400/bars.length}px`, 
              height: `${(340*item)/Math.max(...bars)}px`,
          }}/>
      )
    })
    console.log("pero");
    updatebarArray(temparray);
  }, []);

  return (
    <div className="algorithm_legend">
      <button id="legend_title"
      onMouseEnter={() => swaphover(true)}
      onMouseLeave={() => swaphover(false)}
      onClick={() => InsertionSort({bars, changebars, barArray, updatebarArray})}
      >{ishover === true ? "Run algorithm" : algorithm_name}</button>
      <div id="display_array">
        {barArray}
      </div>
    </div>
  );
};

export default AlgorithmLegend;

import "../css/AlgorithmLegend.css";
import Bar from "./Bar.tsx";
import InsertionSort from "../functions/InsertionSort.tsx";
import SelectionSort from "../functions/SelectionSort.tsx";
import BubbleSort from "../functions/BubbleSort.tsx";
import MergeSort from "../functions/MergeSort.tsx";
import { useState, useEffect } from "react";

interface Props {
  algorithm_name: string;
  algorithm:number;
  data: number[];
}

const AlgorithmLegend = ({ algorithm_name, algorithm, data }: Props) => {

  const bars:number[] = [...data];
  
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
    updatebarArray(temparray);
  }, []);

  return (
    <div className="algorithm_legend">
      <button id="legend_title"
      onMouseEnter={() => swaphover(true)}
      onMouseLeave={() => swaphover(false)}
      onClick={() => {
        switch(algorithm) {
          case 1:
            InsertionSort({bars, barArray, updatebarArray});
            break;
          case 2:
            SelectionSort({bars, barArray, updatebarArray});
            break;
          case 3:
            BubbleSort({bars, barArray, updatebarArray});
            break;
          case 4:
            MergeSort({bars, barArray, updatebarArray});
            break;
        }
        }
      }
      >{ishover === true ? "Run algorithm" : algorithm_name}</button>
      <div id="display_array">
        {barArray}
      </div>
    </div>
  );
};

export default AlgorithmLegend;

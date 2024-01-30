import "../css/AlgorithmLegend.css";
import Bar from "./Bar.tsx";
import InsertionSort from "../functions/InsertionSort.ts";
import SelectionSort from "../functions/SelectionSort.ts";
import BubbleSort from "../functions/BubbleSort.ts";
import MergeSort from "../functions/MergeSort.ts";
import { useState, useEffect } from "react";
import { TreeSort } from "../functions/TreeSort/TreeSort.tsx";

interface Props {
  algorithm_name: string;
  algorithm: number;
  data: number[];
  shouldRunAll: boolean;
  overalComputing: boolean;
  alterOveralComputing: React.Dispatch<React.SetStateAction<boolean>>;
  alterFinished: React.Dispatch<React.SetStateAction<number>>
}

const AlgorithmLegend = ({ algorithm_name, algorithm, data, shouldRunAll, overalComputing, alterOveralComputing, alterFinished }: Props) => {

  const [isComputing, alterComputingState] = useState(false);

  var bars: number[] = [...data];

  const [ishover, swaphover] = useState<boolean>(false);
  const [barArray, updatebarArray] = useState<React.ReactElement[]>([<Bar key={1} inputStyle={{
    backgroundColor: "#ffd700",
    width: `${400 / bars.length}px`,
    height: `${(340 * 1) / Math.max(...bars)}px`,
  }} />]);

  function finished() {
    alterFinished((prevVal) => {
      if (prevVal === 4) {
        alterOveralComputing(false);
        return 0;
      }

      return prevVal + 1;
    })
  }

  function resetBarValues() {
    bars = [...data];

    let temparray = bars.map((item, index) => {
      return (
        <Bar
          key={index}
          inputStyle={
            {
              backgroundColor: "#ffd700",
              width: `${400 / bars.length}px`,
              height: `${(340 * item) / Math.max(...bars)}px`,
            }} />
      )
    })
    updatebarArray(temparray);
  }

  useEffect(() => {

    const runAllAlgorithms = async () => {

      if (shouldRunAll) {
        alterOveralComputing(true);
        switch (algorithm) {
          case 1:
            await InsertionSort({ bars, barArray, updatebarArray });
            finished();
            break;
          case 2:
            await SelectionSort({ bars, barArray, updatebarArray });
            finished();
            break;
          case 3:
            await BubbleSort({ bars, barArray, updatebarArray });
            finished();
            break;
          case 4:
            await MergeSort({ bars, barArray, updatebarArray });
            finished();
            break;
          case 5:
            await TreeSort({ bars, updatebarArray });
            finished();
            break;
        }
      }
    }

    runAllAlgorithms();

  }, [shouldRunAll])

  useEffect(() => {
    resetBarValues();
  }, [data]);

  return (
    <div className="algorithm_legend">
      <button id="legend_title"
        disabled={isComputing || overalComputing}
        onMouseEnter={() => swaphover(true)}
        onMouseLeave={() => swaphover(false)}
        onClick={async () => {

          switch (algorithm) {
            case 1:
              alterComputingState(true);
              await InsertionSort({ bars, barArray, updatebarArray });
              alterComputingState(false);
              break;
            case 2:
              alterComputingState(true);
              await SelectionSort({ bars, barArray, updatebarArray });
              alterComputingState(false);
              break;
            case 3:
              alterComputingState(true);
              await BubbleSort({ bars, barArray, updatebarArray });
              alterComputingState(false);
              break;
            case 4:
              alterComputingState(true);
              await MergeSort({ bars, barArray, updatebarArray });
              alterComputingState(false);
              break;
            case 5:
              alterComputingState(true);
              await TreeSort({ bars, updatebarArray });
              alterComputingState(false);
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

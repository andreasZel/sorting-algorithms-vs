import '../css/App.css'
import AlgorithmLegend from "./AlgorithmLegend.tsx";
import PopUp from './PopUp.tsx';
import { useState } from 'react';

const App: React.FC = () => {

  let [data, changedata] = useState<number[]>([]);

  if (data.length > 0){
    return (
      <div className="display_grid">
        <AlgorithmLegend algorithm_name={"Insertion Sort"} data={data}/>
        <AlgorithmLegend algorithm_name={"Insertion sort"} data={data}/>
        <AlgorithmLegend algorithm_name={"Insertion sort"} data={data}/>
        <AlgorithmLegend algorithm_name={"Insertion sort"} data={data}/>
        <AlgorithmLegend algorithm_name={"Insertion sort"} data={data}/>
      </div>
    )
  } else {
    return(
      <PopUp data={data} changedata={changedata}/>
    );
  }
}

export default App;

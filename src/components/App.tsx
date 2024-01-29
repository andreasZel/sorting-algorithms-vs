import '../css/App.css';
import AlgorithmLegend from "./AlgorithmLegend.tsx";
import PopUp from './PopUp.tsx';
import { useState } from 'react';

const App: React.FC = () => {

  const [data, changedata] = useState<number[]>([]);

  if (data.length > 0) {
    return (
      <div className="display_grid">
        <AlgorithmLegend algorithm_name={"Insertion Sort"} algorithm={1} data={data} />
        <AlgorithmLegend algorithm_name={"Selection Sort"} algorithm={2} data={data} />
        <AlgorithmLegend algorithm_name={"Bubble Sort"} algorithm={3} data={data} />
        <AlgorithmLegend algorithm_name={"Merge Sort"} algorithm={4} data={data} />
        <AlgorithmLegend algorithm_name={"Tree Sort"} algorithm={5} data={data} />
      </div>
    )
  } else {
    return (
      <PopUp changedata={changedata} />
    );
  }
}

export default App;

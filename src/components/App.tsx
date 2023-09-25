import '../css/App.css'
import AlgorithmLegend from "./AlgorithmLegend.tsx";

const App: React.FC = () => {

  return (
   <div className="display_grid">
    <AlgorithmLegend algorithm_name={"Insertion sort"} data={[1, 4, 5, 3, 3, 8, 5]}/>
   </div>
  )
}

export default App;

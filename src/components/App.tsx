//delay function to display the results in real-time
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

import '../css/App.css';
import AlgorithmLegend from "./AlgorithmLegend.tsx";
import PopUp from './PopUp.tsx';
import { useState } from 'react';

const App: React.FC = () => {

  const [data, changedata] = useState<number[]>([]);
  const [isMenuVisible, alterMenuState] = useState(false);
  const [shouldRunAll, alterShouldRunAll] = useState(false);
  const [rotate, alterRotation] = useState<"horizontal-tb" | "vertical-rl">("vertical-rl");
  const [overalComputing, alterOveralComputing] = useState(false);
  const [disableButtons, enableDisableBtns] = useState(false);
  const [finished, alterFinished] = useState(0);

  if (data.length > 0) {
    return (
      <div className='display_conteiner' onClick={() => {
        if (isMenuVisible) {
          alterMenuState((false))
        }
      }
      }>
        <div className="display_grid">
          <AlgorithmLegend algorithm_name={"Insertion Sort"} algorithm={1} data={data} shouldRunAll={shouldRunAll} overalComputing={overalComputing} alterOveralComputing={alterOveralComputing} alterFinished={alterFinished} enableDisableBtns={enableDisableBtns} alterShouldRunAll={alterShouldRunAll}/>
          <AlgorithmLegend algorithm_name={"Selection Sort"} algorithm={2} data={data} shouldRunAll={shouldRunAll} overalComputing={overalComputing} alterOveralComputing={alterOveralComputing} alterFinished={alterFinished} enableDisableBtns={enableDisableBtns} alterShouldRunAll={alterShouldRunAll}/>
          <AlgorithmLegend algorithm_name={"Bubble Sort"} algorithm={3} data={data} shouldRunAll={shouldRunAll} overalComputing={overalComputing} alterOveralComputing={alterOveralComputing} alterFinished={alterFinished} enableDisableBtns={enableDisableBtns} alterShouldRunAll={alterShouldRunAll}/>
          <AlgorithmLegend algorithm_name={"Merge Sort"} algorithm={4} data={data} shouldRunAll={shouldRunAll} overalComputing={overalComputing} alterOveralComputing={alterOveralComputing} alterFinished={alterFinished} enableDisableBtns={enableDisableBtns} alterShouldRunAll={alterShouldRunAll}/>
          <AlgorithmLegend algorithm_name={"Tree Sort"} algorithm={5} data={data} shouldRunAll={shouldRunAll} overalComputing={overalComputing} alterOveralComputing={alterOveralComputing} alterFinished={alterFinished} enableDisableBtns={enableDisableBtns} alterShouldRunAll={alterShouldRunAll} />
        </div>
        {!isMenuVisible && <button className='menu' title='menu' onClick={() => [alterMenuState((true))]}>☰</button>}

        {isMenuVisible && <div className='menu_btns'>
          <button title='run all' disabled={overalComputing || disableButtons} onClick={async() => { changedata([...data]); await delay(300); alterShouldRunAll(true); }} className='runAllAlgorithmsBtn'>Run All</button>
          <button title='reset' disabled={overalComputing || disableButtons} onClick={() => { enableDisableBtns(false); changedata([...data]); }} onMouseOut={() => { alterRotation("horizontal-tb") }} onMouseOver={() => { alterRotation("vertical-rl") }}><span style={{ writingMode: rotate }}>↻</span></button>
          <button title='go back' disabled={overalComputing || disableButtons} onClick={() => { alterShouldRunAll(false); enableDisableBtns(false); changedata([]) }}>↩</button>
        </div>}
      </div>
    )
  } else {
    return (
      <PopUp changedata={changedata} />
    );
  }
}

export default App;

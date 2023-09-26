import "../css/PopUp.css"
import { useState } from 'react';

interface Props {
    data:number[];
    changedata:React.Dispatch<React.SetStateAction<number[]>>;
  }

const PopUp = ({data, changedata}:Props) => {
    
    let [numberOfElements, changeInput] = useState<number>(0);

    const applyRandomValues = () => {
        let i:number = 0;
        let temparray:number[] = [];

        for (i; i < numberOfElements; i++){
            temparray.push(Math.floor((Math.random() * 100) + 1));
        }
        console.log(data);
        changedata(temparray);
    }

    return(
        <div id="pop_up_overlay">
            <div id="pop_up_conteiner">
                <h3>How many numbers to sort?</h3>
                <div className="break"></div>
                <div id="input_conteiner">
                    <input onChange={(e) => {changeInput(Number(e.target.value))}} value={numberOfElements?.toString()}/>
                    <button onClick={applyRandomValues}>Go</button>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
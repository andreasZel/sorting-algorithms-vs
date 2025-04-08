import "../css/PopUp.css"
import { useState } from 'react';

interface Props {
    changedata: React.Dispatch<React.SetStateAction<number[]>>;
}

const PopUp = ({ changedata }: Props) => {

    let [numberOfElements, changeInput] = useState<number>(0);

    const handleInput = (input: string) => {

        let tempnum: number = parseInt(input);

        if (isNaN(tempnum)) {
            changeInput(0);
        } else {
            changeInput(tempnum);
        }
    }

    const applyRandomValues = () => {
        let i: number = 0;
        let temparray: number[] = [];

        for (i; i < numberOfElements; i++) {
            temparray.push(Math.floor((Math.random() * 100) + 1));
        }
        changedata(temparray);
    }

    return (
        <div id="pop_up_overlay">
            <div id="pop_up_conteiner">
                <h3>How many numbers to sort ?</h3>
                <div className="break"></div>
                <div id="input_conteiner">
                    <input onChange={(e) => { handleInput(e.target.value) }} value={numberOfElements} />
                    <button onClick={applyRandomValues}>Go</button>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import AlgorithmLegend from "../components/AlgorithmLegend.tsx";
import * as utils from '../functions/InsertionSort.tsx';  

import {useState} from "react";

type Props = {
    testInput:number[];
    inputAlgo:string; 
    inputAlgoNum:number;
};

const MockupWithData = ({testInput, inputAlgo, inputAlgoNum}:Props) => {
    const [data, _] = useState<number[]>(testInput);
    
    return (<AlgorithmLegend 
        algorithm_name={inputAlgo}
        algorithm={inputAlgoNum}
        data={data}
        />);
}

it("If props are passed correctly, display the legend of the Algorithm selected", () => {

    render(<MockupWithData testInput={[1, 2, 3]} inputAlgo={"Insertion Sort"} inputAlgoNum={1}/>);

    let Gridbutton = screen.getAllByRole('button', {name: /Insertion Sort/i});

    expect(Gridbutton.length).toEqual(1);
});

it("If props are passed correctly, number of bars should be equal to the data passed", () => {

    const {container} = render(<MockupWithData testInput={[1, 2, 3]} inputAlgo={"Insertion Sort"} inputAlgoNum={1}/>);
    
    const dispayGrid = container.querySelector('#display_array');

    expect(dispayGrid?.childElementCount).toEqual(3);
});

it("If algorithm is rendered, pressing the button should sort the array", async () => {

    render(<MockupWithData testInput={[3, 2, 1]} inputAlgo={"Insertion Sort"} inputAlgoNum={1}/>);
    
    let Gridbutton = screen.getByRole('button', {name: /Insertion Sort/i});
   
    const spy = jest.spyOn(utils, 'default');

    await userEvent.click(Gridbutton);

    expect(spy).toHaveBeenCalled();
});


import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import PopUp from '../components/PopUp.tsx';
import {useState} from "react";

const MockupWithData = () => {
    const [data, changedata] = useState<number[]>([]);
    console.log(data);

    return <PopUp changedata={changedata}/>;
}


it("Initial value of input should be 0", () => {

    render(<MockupWithData />);

    const Numbersinput = screen.getByRole('textbox');

    expect(Numbersinput).toHaveValue("0");
});

it("If user types whitespace characters, the input should remain 0", async () => {

    render(<MockupWithData />);

    let Numbersinput = screen.getByRole('textbox');

    await userEvent.type(Numbersinput , "    ");

    expect(Numbersinput).toHaveValue("0");
});

it("If user types a number the input should change to that number", async () => {

    render(<MockupWithData />);

    let Numbersinput = screen.getByRole('textbox');

    await userEvent.type(Numbersinput , "1");

    expect(Numbersinput).toHaveValue("1");
});
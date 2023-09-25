import { useState, useEffect } from "react";

type BarStyle = {
    backgroundColor:string;
    width:string;
    height:string;
}

interface Props {
    inputStyle: BarStyle;
}

const Bar = ({inputStyle}:Props) => {

    const [barstyle, changebarstyle] = useState<BarStyle>(inputStyle)

    useEffect(() => {
        changebarstyle(inputStyle);
    }, [inputStyle]);
    
    return(
        <div className="bar" style={barstyle}></div>
    );
}

export default Bar;
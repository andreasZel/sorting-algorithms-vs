type Props = {
    bars:number[];
    changebars:React.Dispatch<React.SetStateAction<number[]>>;
    barArray:React.ReactElement[];
    updatebarArray:React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>;
}

const InsertionSort = ({bars, changebars, barArray, updatebarArray}:Props) => {
    let i:number;
    let j:number;
    
    let key:number;
    let arrayCP:number[];
    
    let propkey:React.ReactElement;
    let bararrayCP:React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;

    //console.log(bars);
    bararrayCP = [...barArray];
    arrayCP = bars;

    for (i = 1; i < arrayCP.length; i++){
        key = arrayCP[i];
        propkey = bararrayCP[i];
        j = i - 1; 

        while (j >= 0 && key > arrayCP[j]) {
            
            arrayCP[j + 1] = arrayCP[j];
            bararrayCP[j + 1] = bararrayCP[j];
            
            //changebars(arrayCP);
            updatebarArray(bararrayCP);
            j = j - 1;
        }

        arrayCP[j + 1] = key;
        bararrayCP[j + 1] = propkey;
        //changebars(arrayCP);
        updatebarArray(bararrayCP);
    }

    //console.log(bars);
}

export default InsertionSort;
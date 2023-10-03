//delay function to display the results in real-time
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
}

type Props = {
    bars:number[];
    barArray:React.ReactElement[];
    updatebarArray:React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>;
}

 const InsertionSort = async ({bars, barArray, updatebarArray}:Props) => {
    
    let i:number;
    let j:number;
    
    let key:number;
    let arrayCP:number[];
    
    let propkey:React.ReactElement;
    let bararrayCP:React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;

    bararrayCP = barArray;
    arrayCP = bars;

    for (i = 1; i < arrayCP.length; i++) {

        key = arrayCP[i];
        propkey = bararrayCP[i];
        j = i - 1; 

        while (j >= 0 && key > arrayCP[j]) {
            
            arrayCP[j + 1] = arrayCP[j];
            bararrayCP[j + 1] = bararrayCP[j];
            updatebarArray([...bararrayCP]);
            j = j - 1;
        }

        arrayCP[j + 1] = key;
        bararrayCP[j + 1] = propkey;

        updatebarArray([...bararrayCP]);
        await delay(100);
    }

}

export default InsertionSort;
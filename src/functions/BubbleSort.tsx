//delay function to display the results in real-time
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
}

type Props = {
    bars:number[];
    barArray:React.ReactElement[];
    updatebarArray:React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>;
}

 const BubbleSort = async ({bars, barArray, updatebarArray}:Props) => {
    
    let i:number;
    let j:number;
    
    let key:number;
    let arrayCP:number[];
    let swapped:boolean = false;
    let propkey:React.ReactElement;
    let bararrayCP:React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;

    bararrayCP = barArray;
    arrayCP = bars;

    for (i = 0; i < arrayCP.length - 1; i++) {

        swapped = false;

        for (j = 0; j < arrayCP.length - i - 1; j++) {

            if (arrayCP[j] > arrayCP[j + 1]) {

                key = arrayCP[j];
                arrayCP[j] = arrayCP[j + 1];
                arrayCP[j + 1] = key;

                propkey = bararrayCP[j];
                bararrayCP[j] = bararrayCP[j + 1];
                bararrayCP[j + 1] = propkey;
                updatebarArray([...bararrayCP]);
                await delay(100);
                
                swapped = true;
            }
        }
 
        if (swapped == false)
            break;
    }
}

export default BubbleSort;
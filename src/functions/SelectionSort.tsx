//delay function to display the results in real-time
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
}

type Props = {
    bars:number[];
    barArray:React.ReactElement[];
    updatebarArray:React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>;
}

const SelectionSort = async ({bars, barArray, updatebarArray}:Props) => {
    let i:number;
    let j:number;
    
    let min:number;

    let key:number;
    let arrayCP:number[];
    
    let propkey:React.ReactElement;
    let bararrayCP:React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;

    arrayCP = bars;
    bararrayCP = barArray; 

    for (i = 0; i < bars.length - 1; i++) {
        
        min = i;

        for (j = i + 1; j < bars.length; j++){

            if (arrayCP[j] < arrayCP[min])
                min = j;
        }

        if(min != i){

            key = arrayCP[i];          
            arrayCP[i] = arrayCP[min];
            arrayCP[min] = key;

            propkey = bararrayCP[i];
            bararrayCP[i] = bararrayCP[min];
            bararrayCP[min] = propkey;
            console.log(arrayCP);
            
            updatebarArray([...bararrayCP]);
            await delay(100);
        }
    }
}

export default SelectionSort;
type Props = {
    bars:number[];
    changebars:React.Dispatch<React.SetStateAction<number[]>>;
}

const InsertionSort = ({bars, changebars}:Props) => {
    let i:number;
    let j:number;
    let key:number;
    let arrayCP: number[];
    console.log(bars);

    arrayCP = bars;

    for (i = 1; i < arrayCP.length; i++){
        key = arrayCP[i];
        j = i - 1; 

        while (j >= 0 && key > arrayCP[j]) {
            arrayCP[j + 1] = arrayCP[j];
            changebars(arrayCP);
            j = j - 1;
        }

        arrayCP[j + 1] = key;
        changebars(arrayCP);
    }

    console.log(arrayCP);
}

export default InsertionSort;
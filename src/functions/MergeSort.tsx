import Bar from "../components/Bar.tsx";

//delay function to display the results in real-time
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
}

type Props = {
    bars:number[];
    barArray:React.ReactElement[];
    updatebarArray:React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>;
}

const MergeSort = ({bars, barArray, updatebarArray}:Props) => {
    let arrayCP:number[] = bars;
    let bararrayCP:React.ReactElement[] = barArray;
    let l:number = 0;
    let r:number = arrayCP.length - 1;

    mergeSort({arrayCP, bararrayCP, updatebarArray, l, r});
}

const mergeSort = async ({arrayCP, bararrayCP, updatebarArray, l, r}:{arrayCP:number[], bararrayCP:React.ReactElement[], updatebarArray:React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>, l:number, r:number}) => {
    
    let lcp:number = l;
    let rcp:number = r;

    if (lcp < rcp) {

        let m:number;

        m = Math.floor(l + (r - l) / 2);
        r = m;
        // Sort first and second halves
        mergeSort({arrayCP, bararrayCP, updatebarArray, l, r});

        l = m + 1;
        r = rcp;
        mergeSort({arrayCP, bararrayCP, updatebarArray, l, r});
 
        l = lcp;
        merge({arrayCP, l, m, r});

        let temparray = arrayCP.map((item, index) => {
            return (
                <Bar 
                key={index}
                inputStyle={
                    {
                    backgroundColor: "#ffd700", 
                    width: `${400/arrayCP.length}px`, 
                    height: `${(340*item)/Math.max(...arrayCP)}px`,
                }}/>
            )
        })

        updatebarArray([...temparray]);
        await delay(100);
    }

};

const merge = ({arrayCP, l, m, r}:{arrayCP:number[], l:number, m:number, r:number}) => {
    
    let i:number;
    let j:number;
    let k:number;
    let n1:number = m - l + 1;
    let n2:number = r - m;
 
    // Create temp arrays
    let L:number[] = [];
    let R:number[] = [];
 
    // Copy data to temp arrays L[] and R[]
    for (i = 0; i < n1; i++)
        L[i] = arrayCP[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arrayCP[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arrayCP[k] = L[i];
            i++;
        }
        else {
            arrayCP[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of L[],
    // if there are any
    while (i < n1) {
        arrayCP[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of R[],
    // if there are any
    while (j < n2) {
        arrayCP[k] = R[j];
        j++;
        k++;
    }
};

export default MergeSort;
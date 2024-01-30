//delay function to display the results in real-time
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

type Props = {
    bars: number[];
    barArray: React.ReactElement[];
    updatebarArray: React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>;
}

const MergeSort = async({ bars, barArray, updatebarArray }: Props) => {
    let arrayCP: number[] = [...bars];
    let bararrayCP: React.ReactElement[] = [...barArray];

    await mergeSort({ arrayCP, bararrayCP, updatebarArray });
}

const mergeSort = async ({ arrayCP, bararrayCP, updatebarArray }: { arrayCP: number[], bararrayCP: React.ReactElement[], updatebarArray: React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>> }) => {

    var curr_size;
    var left_start;

    for (curr_size = 1; curr_size <= arrayCP.length - 1; curr_size = 2 * curr_size) {

        for (left_start = 0; left_start < arrayCP.length - 1; left_start += 2 * curr_size) {

            var m = Math.min(left_start + curr_size - 1, arrayCP.length - 1);

            var r = Math.min(left_start + 2 * curr_size - 1, arrayCP.length - 1);

            var l = left_start
            merge({ arrayCP, bararrayCP, updatebarArray, l, m, r });
            await delay(150);
        }
    }
    updatebarArray([...bararrayCP]);
    delay(100);
};

const merge = async ({ arrayCP, bararrayCP, updatebarArray, l, m, r }: { arrayCP: number[], bararrayCP: React.ReactElement[], updatebarArray: React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>, l: number, m: number, r: number }) => {

    let i: number;
    let j: number;
    let k: number;
    let n1: number = m - l + 1;
    let n2: number = r - m;

    // Create temp arrays
    let L: number[] = [];
    let R: number[] = [];
    let LB: React.ReactElement[] = [];
    let RB: React.ReactElement[] = [];


    // Copy data to temp arrays L[] and R[]
    for (i = 0; i < n1; i++) {
        L[i] = arrayCP[l + i];
        LB[i] = bararrayCP[l + i];
    }
    for (j = 0; j < n2; j++) {
        R[j] = arrayCP[m + 1 + j];
        RB[j] = bararrayCP[m + 1 + j];
    }

    // Merge the temp arrays back into arr[l..r]
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arrayCP[k] = L[i];
            bararrayCP[k] = LB[i];
            i++;
        }
        else {
            arrayCP[k] = R[j];
            bararrayCP[k] = RB[j];
            j++;
        }

        k++;
    }

    // Copy the remaining elements of L[],
    // if there are any
    while (i < n1) {
        arrayCP[k] = L[i];
        bararrayCP[k] = LB[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[],
    // if there are any
    while (j < n2) {
        arrayCP[k] = R[j];
        bararrayCP[k] = RB[j];
        updatebarArray([...bararrayCP]);
        await delay(20);
        j++;
        k++;
    }
};

export default MergeSort;
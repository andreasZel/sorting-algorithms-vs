import Bar from "../../components/Bar.tsx";
import { TreeNode } from "./Node.ts";

//delay function to display the results in real-time
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

type Props = {
  bars: number[];
  updatebarArray: React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>;
}

var tempBarArr: number[] = [];
var root: TreeNode | null = new TreeNode(null);

root = null;

async function insert(key: number, updatebarArray: React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>) {
  var tempBar;

  root = insertRec(root, key);

  if (root != null) {
    inorderRec(root);

    tempBar = tempBarArr.map((bar: number, index: number) => {
      return (<Bar key={index} inputStyle={
        {
          backgroundColor: "#ffd700",
          width: `${400 / tempBarArr.length}px`,
          height: `${(340 * (bar as number)) / Math.max(...(tempBarArr as number[]))}px`,
        }
      } />)
    });

    updatebarArray([...tempBar]);
    await delay(100);
  }
  tempBarArr = [];
}

function insertRec(root: TreeNode | null, key: number) {

  if (root == null) {
    root = new TreeNode(key);
    return root;
  }

  if (key < (root.key as any)) {

    root.left = insertRec(root.left, key);

  }
  else if (key > (root.key as any)) {

    root.right = insertRec(root.right, key);
  }

  return root;
}

// A function to do  
// inorder traversal of BST 
function inorderRec(root: TreeNode | null) {

  if (root != null) {
    inorderRec(root.left);
    console.log(root.key)
    tempBarArr.push(root.key as number);
    inorderRec(root.right);
  }

  return 0;
}

async function treeins(arr: number[], updatebarArray: React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>>[]>>) {
  for (let i = 0; i < arr.length; i++) {
    await insert(arr[i], updatebarArray);
  }
}

export function TreeSort({ bars, updatebarArray }: Props) {
  treeins([...bars], updatebarArray);
}


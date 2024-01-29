export type NodeType = {
    key: number | null;
    left: NodeType | null;
    right: NodeType | null;
} | null;

export class TreeNode {

    key: number | null = null;
    left: NodeType = null;
    right: NodeType = null;

    constructor(item: number | null) {
        this.key = item;
        this.left = this.right = null;
    }
};
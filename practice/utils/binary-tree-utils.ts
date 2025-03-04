import { BinaryTreeNode } from "../binary-tree/core/binary-tree-node";

export function printBinaryTree(root: BinaryTreeNode<number> | null): void {
  if (root === null) {
    // Base Case
    return;
  }

  process.stdout.write(`${root.data}:`);

  if (root.left !== null) {
    // Check if left exists
    process.stdout.write(`L${root.left.data}`);
  }

  if (root.right !== null) {
    // Check if right exists
    process.stdout.write(`R${root.right.data}`);
  }

  console.log(); // New line
  printBinaryTree(root.left);
  printBinaryTree(root.right);
}

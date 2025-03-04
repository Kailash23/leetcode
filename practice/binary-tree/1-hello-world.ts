import { printBinaryTree } from "../utils/binary-tree-utils";
import { BinaryTreeNode } from "./core/binary-tree-node";

function main(): void {
  const root = new BinaryTreeNode<number>(1); // Create root node
  const node1 = new BinaryTreeNode<number>(2);
  const node2 = new BinaryTreeNode<number>(3);

  root.left = node1;
  root.right = node2;

  printBinaryTree(root);
}

main();

// 1:L2R3
// 2:
// 3:

//    1
//  /   \
// 2     3

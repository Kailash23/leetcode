/**
 * A simple binary tree implementation demonstrating basic tree creation and traversal
 *
 * Time Complexity Analysis:
 * 1. Tree Creation:
 *    - Creating nodes: O(1) for each node
 *    - Setting left/right pointers: O(1) for each connection
 *    - Total creation: O(n) where n is the number of nodes
 *
 * 2. printBinaryTree function:
 *    - Visits each node exactly once in a recursive manner
 *    - For each node, performs constant time operations (printing)
 *    - Total traversal: O(n) where n is the number of nodes
 *
 * Space Complexity Analysis:
 * 1. Tree Storage:
 *    - Each node stores:
 *      * data (number): O(1)
 *      * left pointer: O(1)
 *      * right pointer: O(1)
 *    - Total tree storage: O(n) where n is the number of nodes
 *
 * 2. Recursive Call Stack:
 *    - In worst case (skewed tree): O(n)
 *    - In best/average case (balanced tree): O(log n)
 *    - Current example (3 nodes): O(2) - depth is 2
 *
 * 3. Additional Space:
 *    - No additional data structures used
 *    - Only constant extra space for variables
 *
 * Overall Complexity:
 * - Time: O(n) where n is the number of nodes
 * - Space: O(n) due to tree storage and recursive call stack
 */

import { printBinaryTree } from "../utils/binary-tree-utils";
import { BinaryTreeNode } from "./core/binary-tree-node";

function main(): void {
  // Node creation: O(1) for each node
  const root = new BinaryTreeNode<number>(1); // Create root node
  const node1 = new BinaryTreeNode<number>(2);
  const node2 = new BinaryTreeNode<number>(3);

  // Pointer assignments: O(1) for each connection
  root.left = node1;
  root.right = node2;

  // Print tree: O(n) time complexity
  printBinaryTree(root);
}

main();

// Output:
// 1:L2R3
// 2:
// 3:

//    1
//  /   \
// 2     3

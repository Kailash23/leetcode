/**
 * Print Level Wise
 *
 * Given a binary tree, print the tree in level wise order.
 * For printing a node with data N, you need to follow the exact format -
 * N:L:x,R:y
 *
 * where, N is data of any node present in the binary tree. x and y are the values
 * of left and right child of node N. Print -1 if any child is null.
 * There is no space in between.
 * You need to print all nodes in the level order form in different lines.
 *
 * Input format:
 * Elements in level order form (separated by space)
 * (If any node does not have left or right child, take -1 in its place)
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { takeBinaryTreeInputLevelWise } from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Prints the binary tree in level-wise order with the specified format
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * Each node is processed exactly once in the level-order traversal.
 *
 * Space Complexity: O(w) - Where w is the maximum width of the tree.
 * The queue will contain at most w nodes at any point in time.
 * In a balanced binary tree, the maximum width is n/2 in the worst case (at the last level),
 * which simplifies to O(n).
 */
function printLevelWise(root: BinaryTreeNode<number> | null): void {
  if (root === null) {
    return;
  }

  const pendingNodes: BinaryTreeNode<number>[] = [];
  pendingNodes.push(root);

  while (pendingNodes.length > 0) {
    const front = pendingNodes.shift()!;

    process.stdout.write(`${front.data}:`);

    // Process left child
    if (front.left !== null) {
      process.stdout.write(`L:${front.left.data}`);
      pendingNodes.push(front.left);
    } else {
      process.stdout.write("L:-1");
    }

    // Process right child
    if (front.right !== null) {
      process.stdout.write(`,R:${front.right.data}`);
      pendingNodes.push(front.right);
    } else {
      process.stdout.write(",R:-1");
    }

    console.log(); // New line
  }
}

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();
    console.log();
    printLevelWise(root);

    closeReadLine();
  } catch (error) {
    console.error("An error occurred:", error);
    closeReadLine();
  }
}

// Run the main function
main().catch((error) => {
  console.error("An error occurred:", error);
  closeReadLine();
});

/**
 * Example tree structure:
 *            1
 *         /     \
 *        2       3
 *      /  \    /  \
 *     4    5  6    7
 *             / \
 *            8   9
 *
 * Output:
 * 1:L:2,R:3
 * 2:L:4,R:5
 * 3:L:6,R:7
 * 4:L:-1,R:-1
 * 5:L:-1,R:-1
 * 6:L:8,R:9
 * 7:L:-1,R:-1
 * 8:L:-1,R:-1
 * 9:L:-1,R:-1
 */

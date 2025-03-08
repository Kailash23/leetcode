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
import {
  printBinaryTreeLevelWise,
  takeBinaryTreeInputLevelWise,
} from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();
    console.log();
    printBinaryTreeLevelWise(root);

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

/**
 * Program to count number of nodes in a binary tree
 *
 * While working with generic trees we didn't require a base case
 * because we loop according to the number of child nodes, but for
 * binary trees we need an explicit base case.
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { takeBinaryTreeInputLevelWise } from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Counts the number of nodes in a binary tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once through recursion.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n).
 *
 * @param root The root node of the binary tree
 * @returns The number of nodes in the tree
 */
function numNodes(root: BinaryTreeNode<number> | null): number {
  if (root === null) {
    // Base case is needed in case of binary Tree
    return 0;
  }

  // 1 added for root node and recursion on left and right subtrees
  return 1 + numNodes(root.left) + numNodes(root.right);
}

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();

    const nodeCount = numNodes(root);
    console.log(`\nNo of Nodes: ${nodeCount}`);

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
 * This tree has 9 nodes.
 */

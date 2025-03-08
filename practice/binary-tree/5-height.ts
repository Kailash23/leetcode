/**
 * Code : Height of Binary Tree
 *
 * Given a binary tree, find and return the height of given tree.
 *
 * Input format:
 * Nodes in the level order form (separated by space). If any node does not have
 * left or right child, take -1 in its place
 *
 * Output format:
 * Height
 *
 * Constraints:
 * 1 <= N <= 10^5
 *
 * Sample Input:
 * 10 9 4 -1 -1 5 8 -1 6 -1 -1 3 -1 -1 -1
 *
 * Sample Output:
 * 5
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { takeBinaryTreeInputLevelWise } from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Calculates the height of a binary tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once through recursion.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n).
 *
 * @param root The root node of the binary tree
 * @returns The height of the tree (0 for empty tree)
 */
function height(root: BinaryTreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  // Calculate height of left and right subtrees
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  // Height is 1 (for current node) + maximum of left and right subtree heights
  return 1 + Math.max(leftHeight, rightHeight);
}

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();

    const treeHeight = height(root);
    console.log(`\nHeight of Binary Tree: ${treeHeight}`);

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
 * Height of this tree is 4:
 * - Level 1: Node 1
 * - Level 2: Nodes 2, 3
 * - Level 3: Nodes 4, 5, 6, 7
 * - Level 4: Nodes 8, 9
 */

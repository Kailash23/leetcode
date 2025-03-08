/**
 * Code : Find a node
 *
 * Given a Binary Tree and an integer x, check if node with data x is present in
 * the input binary tree or not. Return true or false.
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { takeBinaryTreeInputLevelWise } from "../utils/binary-tree-utils";
import { askQuestion, closeReadLine } from "../utils/common";

/**
 * Checks if a node with the given value exists in the binary tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * In the worst case, we might need to visit all nodes if the target node
 * is not present or is at the rightmost leaf.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n).
 *
 * @param root The root node of the binary tree
 * @param x The value to search for
 * @returns true if a node with value x is found, false otherwise
 */
function isNodePresent(
  root: BinaryTreeNode<number> | null,
  x: number
): boolean {
  if (root === null) {
    return false;
  }

  if (root.data === x) {
    return true;
  }

  // Check in left and right subtrees
  return isNodePresent(root.left, x) || isNodePresent(root.right, x);
}

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();
    console.log();

    const x = parseInt(await askQuestion("Enter the value to search for: "));

    if (isNodePresent(root, x)) {
      console.log("Present!");
    } else {
      console.log("Not Present!");
    }

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
 * Example search:
 * - Searching for 5: Present!
 * - Searching for 10: Not Present!
 */

/**
 * Code : Mirror
 *
 * Mirror the given binary tree. That is, right child of every node should
 * become left and left should become right.
 *
 * Note : You don't need to print or return the tree, just mirror it.
 *
 * Input format :
 * Line 1 : Elements in level order form (separated by space)
 * (If any node does not have left or right child, take -1 in its place)
 *
 * Output format : Elements in level order form (Every level in new line)
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import {
  takeBinaryTreeInputLevelWise,
  getHeight,
  printBinaryTree,
} from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Mirrors the given binary tree by swapping left and right children of every node
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once through recursion.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n).
 *
 * @param root The root node of the binary tree
 */
function mirrorBinaryTree(root: BinaryTreeNode<number> | null): void {
  if (root === null) {
    return;
  }

  // Swap left and right children
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively mirror left and right subtrees
  mirrorBinaryTree(root.left);
  mirrorBinaryTree(root.right);
}

// /**
//  * Alternative implementation that mirrors subtrees first, then swaps children
//  */
// function mirrorBinaryTreeAlternative(
//   root: BinaryTreeNode<number> | null
// ): void {
//   if (root === null) {
//     return;
//   }

//   if (root.left === null && root.right === null) {
//     return; // Leaf node, nothing to mirror
//   }

//   // First mirror the subtrees
//   mirrorBinaryTreeAlternative(root.left);
//   mirrorBinaryTreeAlternative(root.right);

//   // Then swap the children
//   const temp = root.left;
//   root.left = root.right;
//   root.right = temp;
// }

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();

    console.log("\nOriginal Tree:");
    printBinaryTree(root);

    // Mirror the tree
    mirrorBinaryTree(root);

    console.log("\nMirrored Tree:");
    printBinaryTree(root);

    console.log(`\nHeight of Binary Tree: ${getHeight(root)}`);

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
 * Example tree structure (before mirroring):
 *            1
 *         /     \
 *        2       3
 *      /  \    /  \
 *     4    5  6    7
 *             / \
 *            8   9
 *
 * After mirroring:
 *            1
 *         /     \
 *        3       2
 *      /  \    /  \
 *     7    6  5    4
 *         / \
 *        9   8
 */

// Enter root data
// 4
// Enter left child of 4
// 3
// Enter right child of 4
// 5
// Enter left child of 3
// -1
// Enter right child of 3
// -1
// Enter left child of 5
// -1
// Enter right child of 5
// -1

// Original Tree:
// 4:L3R5
// 3:
// 5:

// Mirrored Tree:
// 4:L5R3
// 5:
// 3:

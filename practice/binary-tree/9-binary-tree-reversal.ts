/**
 * Tree Traversal
 *
 * This file implements the three classic tree traversal algorithms:
 * 1. Inorder (left -> root -> right)
 * 2. Preorder (root -> left -> right)
 * 3. Postorder (left -> right -> root)
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { takeBinaryTreeInputLevelWise } from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Performs an inorder traversal of the binary tree (left -> root -> right)
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack.
 *
 * @param root The root node of the binary tree
 */
function inOrder(root: BinaryTreeNode<number> | null): void {
  if (root === null) {
    return;
  }

  inOrder(root.left);
  process.stdout.write(`${root.data} `);
  inOrder(root.right);
}

/**
 * Performs a preorder traversal of the binary tree (root -> left -> right)
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack.
 *
 * @param root The root node of the binary tree
 */
function preOrder(root: BinaryTreeNode<number> | null): void {
  if (root === null) {
    return;
  }

  process.stdout.write(`${root.data} `);
  preOrder(root.left);
  preOrder(root.right);
}

/**
 * Performs a postorder traversal of the binary tree (left -> right -> root)
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack.
 *
 * @param root The root node of the binary tree
 */
function postOrder(root: BinaryTreeNode<number> | null): void {
  if (root === null) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  process.stdout.write(`${root.data} `);
}

/**
 * Main function to run the binary tree traversals
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();

    console.log("\nInorder: ");
    inOrder(root);

    console.log("\nPreorder: ");
    preOrder(root);

    console.log("\nPostorder: ");
    postOrder(root);

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
 * Traversal outputs:
 * Inorder:   4 2 5 1 8 6 9 3 7
 * Preorder:  1 2 4 5 3 6 8 9 7
 * Postorder: 4 5 2 8 9 6 7 3 1
 *
 * Traversal patterns:
 * - Level order: level1 nodes -> level2 nodes -> and so on
 * - Pre order:   root -> left -> right
 * - Post order:  left -> right -> root
 * - In Order:    left -> root -> right
 */

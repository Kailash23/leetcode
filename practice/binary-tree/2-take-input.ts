/**
 * Input and Print Binary tree using recursion.
 */
import { BinaryTreeNode } from "./core/binary-tree-node";
import { printBinaryTree } from "../utils/binary-tree-utils";
import { askQuestion, closeReadLine } from "../utils/common";

/**
 * Takes input from user to build a binary tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function creates each node exactly once through recursion.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n).
 */
async function takeBinaryTreeInput(): Promise<BinaryTreeNode<number> | null> {
  const answer = await askQuestion("Enter data\n");
  const rootData = parseInt(answer);

  if (rootData === -1) {
    // If user input -1 that means no child (return null)
    return null;
  }

  // User didn't enter -1
  const root = new BinaryTreeNode<number>(rootData); // Make new node having rootData

  // Recursively build left and right subtrees
  root.left = await takeBinaryTreeInput(); // Linking root node with leftChild
  root.right = await takeBinaryTreeInput(); // Linking root node with rightChild

  return root;
}

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInput();
    console.log();
    printBinaryTree(root);

    // Close the readline interface
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
 *          1
 *        /   \
 *       2     3
 *     /  \   /
 *    4    5 8
 *        / \
 *       6   7
 *
 * Input sequence:
 * 1, 2, 4, -1, -1, 5, 6, -1, -1, 7, -1, -1, 3, 8, -1, -1, -1
 *
 * Output:
 * 1:L2R3
 * 2:L4R5
 * 4:
 * 5:L6R7
 * 6:
 * 7:
 * 3:L8
 * 8:
 */

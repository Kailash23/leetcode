/**
 * Code : Diameter of Binary Tree
 *
 * The diameter of a tree (sometimes called the width) is the number of nodes on
 * the longest path between two end nodes.
 *
 *                 O
 *               /   \
 *              O      O   Diameter - 6
 *            /   \
 *           O     O
 *          /       \
 *         O         O
 *        /           \
 *       O             O
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { takeBinaryTreeInputLevelWise } from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Calculates the height of a binary tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * We visit each node exactly once.
 *
 * @param root The root node of the binary tree
 * @returns The height of the tree (0 for empty tree)
 */
function height(root: BinaryTreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  // Height is 1 (for current node) + maximum of left and right subtree heights
  return 1 + Math.max(height(root.left), height(root.right));
}

/**
 * Calculates the diameter of a binary tree
 *
 * Time Complexity: O(n * h) - Where n is the number of nodes and h is the height of the tree.
 * For each node, we calculate the height of its left and right subtrees, which takes O(h) time.
 * In the worst case (skewed tree), this becomes O(n²).
 * In a balanced tree, it's O(n log n).
 *
 * Space Complexity: O(h) - Due to the recursion stack.
 *
 * @param root The root node of the binary tree
 * @returns The diameter of the tree
 */
function diameter(root: BinaryTreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  // Option 1: Diameter passes through the root
  // Sum of heights of left and right subtrees
  const option1 = height(root.left) + height(root.right);

  // Option 2: Diameter is in the left subtree
  const option2 = diameter(root.left);

  // Option 3: Diameter is in the right subtree
  const option3 = diameter(root.right);

  // Return the maximum of the three options
  return Math.max(option1, Math.max(option2, option3));
}

/**
 * Optimized solution that calculates height and diameter in a single traversal
 *
 * Time Complexity: O(n) - We visit each node exactly once.
 * Space Complexity: O(h) - Due to the recursion stack.
 *
 * @param root The root node of the binary tree
 * @returns An object containing both height and diameter
 */
function heightDiameter(root: BinaryTreeNode<number> | null): {
  height: number;
  diameter: number;
} {
  if (root === null) {
    return { height: 0, diameter: 0 };
  }

  // Get height and diameter of left subtree
  const leftResult = heightDiameter(root.left);

  // Get height and diameter of right subtree
  const rightResult = heightDiameter(root.right);

  // Calculate height of current node
  const height = 1 + Math.max(leftResult.height, rightResult.height);

  // Calculate diameter options
  const option1 = leftResult.height + rightResult.height;
  const option2 = leftResult.diameter;
  const option3 = rightResult.diameter;

  // Calculate diameter of current node
  const diameter = Math.max(option1, Math.max(option2, option3));

  return { height, diameter };
}

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();

    console.log("\nUsing the basic approach:");
    console.log(`Diameter: ${diameter(root)}`);

    console.log("\nUsing the optimized approach:");
    const result = heightDiameter(root);
    console.log(`Diameter: ${result.diameter}`);

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
 * Diameter: 5 (The path is 4 -> 2 -> 1 -> 3 -> 6 -> 8 or 4 -> 2 -> 1 -> 3 -> 6 -> 9)
 *
 * Time Complexity Analysis:
 *
 * Basic Approach:
 * - O(n * h) where n is the number of nodes and h is the height of the tree
 * - For a balanced tree: O(n log n)
 * - For a skewed tree: O(n²)
 *
 * Optimized Approach:
 * - O(n) as we visit each node exactly once and do constant work at each node
 *
 * The inefficiency in the basic approach comes from recalculating heights multiple times:
 * 1. We calculate leftHeight + rightHeight
 * 2. We calculate leftDiameter (which recalculates heights)
 * 3. We calculate rightDiameter (which recalculates heights again)
 *
 * The optimized approach calculates both height and diameter in a single traversal,
 * avoiding redundant calculations.
 */

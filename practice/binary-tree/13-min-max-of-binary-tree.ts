/**
 * Min and Max of Binary Tree
 *
 * Given a binary tree, find and return the min and max data value of given binary tree.
 * Return the output as an object with min and max properties.
 *
 * Input format:
 * Elements in level order form (separated by space)
 * (If any node does not have left or right child, take -1 in its place)
 *
 * Output Format:
 * Max and min (separated by space)
 *
 * Sample Input:
 * 8 3 10 1 6 -1 14 -1 -1 4 7 13 -1 -1 -1 -1 -1 -1 -1
 *
 * Sample Output:
 * 14 1
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { takeBinaryTreeInputLevelWise } from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Interface for the result containing min and max values
 */
interface MinMaxPair {
  min: number;
  max: number;
}

/**
 * Finds the minimum and maximum values in a binary tree
 *
 * Time Complexity: O(n) - We visit each node exactly once.
 * Space Complexity: O(h) - Due to the recursion stack, where h is the height of the tree.
 *
 * @param root The root node of the binary tree
 * @returns An object containing the min and max values
 */
function minMax(root: BinaryTreeNode<number> | null): MinMaxPair {
  if (root === null) {
    // For an empty tree, return extreme values
    return {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER,
    };
  }

  // Get min and max from left subtree
  const leftResult = minMax(root.left);

  // Get min and max from right subtree
  const rightResult = minMax(root.right);

  // Calculate minimum value by comparing:
  // 1. Minimum value in left subtree
  // 2. Minimum value in right subtree
  // 3. Current node's value
  const minimum = Math.min(
    Math.min(leftResult.min, rightResult.min),
    root.data
  );

  // Calculate maximum value by comparing:
  // 1. Maximum value in left subtree
  // 2. Maximum value in right subtree
  // 3. Current node's value
  const maximum = Math.max(
    Math.max(leftResult.max, rightResult.max),
    root.data
  );

  // Return the result
  return {
    min: minimum,
    max: maximum,
  };
}

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();

    console.log();
    const result = minMax(root);
    console.log(`Min: ${result.min}`);
    console.log(`Max: ${result.max}`);

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
 * Min: 1
 * Max: 9
 *
 * Explanation of the algorithm:
 *
 * 1. Base Case:
 *    - If the node is null, return { min: MAX_SAFE_INTEGER, max: MIN_SAFE_INTEGER }
 *    - We use these extreme values so they won't affect our comparisons
 *
 * 2. Recursive Step:
 *    - Get min and max from left subtree
 *    - Get min and max from right subtree
 *
 * 3. Calculation:
 *    - minimum = min(leftResult.min, rightResult.min, root.data)
 *    - maximum = max(leftResult.max, rightResult.max, root.data)
 *
 * 4. Return:
 *    - Return { min: minimum, max: maximum }
 *
 * This approach is efficient because:
 * - We visit each node exactly once
 * - We do constant work at each node
 * - We calculate both min and max in a single traversal
 *
 * Time Complexity: O(n) where n is the number of nodes in the tree
 */

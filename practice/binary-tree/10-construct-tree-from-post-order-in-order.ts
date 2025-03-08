/**
 * Construct Tree from Post-order and In-order
 *
 * Given Post-order and In-order traversal of a binary tree, create the binary
 * tree associated with the traversals. You just need to construct the tree and
 * return the root.
 * Note: Assume binary tree contains only unique elements.
 *
 * Input format:
 * Line 1: n (Total number of nodes in binary tree)
 * Line 2: Post order traversal
 * Line 3: In-order Traversal
 *
 * Output Format:
 * Elements are printed level wise, each level in new line (separated by space).
 *
 * Sample Input:
 * 8
 * 8 4 5 2 6 7 3 1
 * 4 8 2 5 1 6 3 7
 *
 * Sample Output:
 * 1
 * 2 3
 * 4 5 6 7
 * 8
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { closeReadLine } from "../utils/common";
import { askQuestion } from "../utils/common";
import { printBinaryTreeLevelWise } from "../utils/binary-tree-utils";

/**
 * Helper function to build the binary tree from inOrder and postOrder traversals
 *
 * Time Complexity: O(n²) - In the worst case, for each node we might need to search
 * for its position in the inOrder array, which takes O(n) time.
 * This can be optimized to O(n) by using a hash map to store indices.
 *
 * Space Complexity: O(h) - Where h is the height of the tree due to recursion stack.
 *
 * @param inOrder The inOrder traversal array
 * @param postOrder The postOrder traversal array
 * @param inStart Start index of inOrder subarray
 * @param inEnd End index of inOrder subarray
 * @param postStart Start index of postOrder subarray
 * @param postEnd End index of postOrder subarray
 * @returns The root of the constructed binary tree
 */
function buildTreeHelper(
  inOrder: number[],
  postOrder: number[],
  inStart: number,
  inEnd: number,
  postStart: number,
  postEnd: number
): BinaryTreeNode<number> | null {
  if (inStart > inEnd) {
    // Empty array
    return null;
  }

  // Root is the last element of postOrder traversal
  const rootData = postOrder[postEnd];

  // Find the root's position in inOrder traversal
  let rootIndex = -1;
  for (let i = inStart; i <= inEnd; i++) {
    if (inOrder[i] === rootData) {
      rootIndex = i;
      break;
    }
  }

  // If rootIndex is still -1, the input arrays are invalid
  if (rootIndex === -1) {
    throw new Error("Invalid input arrays");
  }

  // Calculate indices for recursive calls
  const leftInStart = inStart;
  const leftInEnd = rootIndex - 1;
  const rightInStart = rootIndex + 1;
  const rightInEnd = inEnd;

  const leftPostStart = postStart;
  const leftPostEnd = leftPostStart + (leftInEnd - leftInStart);
  const rightPostStart = leftPostEnd + 1;
  const rightPostEnd = postEnd - 1;

  // Create the root node
  const root = new BinaryTreeNode<number>(rootData);

  // Recursively build left and right subtrees
  root.left = buildTreeHelper(
    inOrder,
    postOrder,
    leftInStart,
    leftInEnd,
    leftPostStart,
    leftPostEnd
  );

  root.right = buildTreeHelper(
    inOrder,
    postOrder,
    rightInStart,
    rightInEnd,
    rightPostStart,
    rightPostEnd
  );

  return root;
}

/**
 * Constructs a binary tree from postOrder and inOrder traversals
 *
 * @param postOrder The postOrder traversal array
 * @param inOrder The inOrder traversal array
 * @returns The root of the constructed binary tree
 */
function getTreeFromPostOrderAndInOrder(
  postOrder: number[],
  inOrder: number[]
): BinaryTreeNode<number> | null {
  if (
    postOrder.length === 0 ||
    inOrder.length === 0 ||
    postOrder.length !== inOrder.length
  ) {
    return null;
  }

  return buildTreeHelper(
    inOrder,
    postOrder,
    0,
    inOrder.length - 1,
    0,
    postOrder.length - 1
  );
}

/**
 * Main function to run the binary tree construction
 */
async function main() {
  try {
    // For demonstration, we'll use the example from the problem
    // In a real application, you might want to take input from the user

    const n = parseInt(await askQuestion("Enter the number of nodes: "));

    const postOrderInput = await askQuestion(
      "Enter the postOrder traversal (space-separated): "
    );
    const postOrder = postOrderInput.split(" ").map(Number);

    const inOrderInput = await askQuestion(
      "Enter the inOrder traversal (space-separated): "
    );
    const inOrder = inOrderInput.split(" ").map(Number);

    if (postOrder.length !== n || inOrder.length !== n) {
      console.error("Input arrays must have exactly n elements");
      closeReadLine();
      return;
    }

    const root = getTreeFromPostOrderAndInOrder(postOrder, inOrder);

    console.log("\nConstructed Tree (level by level):");
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
 * Example:
 *
 * In-Order:   4 2 5 1 8 6 9 3 7
 * Post-Order: 4 5 2 8 9 6 7 3 1
 *
 * Constructed Tree:
 *            1
 *         /     \
 *        2       3
 *      /  \    /  \
 *     4    5  6    7
 *             / \
 *            8   9
 *
 * Output (level by level):
 * 1
 * 2 3
 * 4 5 6 7
 * 8 9
 */

/**
 * Code: Construct Tree from Preorder and Inorder
 *
 * Given Preorder and Inorder traversal of a binary tree, create the binary tree
 * associated with the traversals. You just need to construct the tree and return
 * the root.
 * Note: Assume binary tree contains only unique elements.
 *
 * Input format:
 * Line 1: n (Total number of nodes in binary tree)
 * Line 2: Pre order traversal
 * Line 3: Inorder Traversal
 *
 * Output Format:
 * Elements are printed level wise, each level in new line (separated by space).
 *
 * Sample Input:
 * 12
 * 1 2 3 4 15 5 6 7 8 10 9 12
 * 4 15 3 2 5 1 6 10 8 7 9 12
 *
 * Sample Output:
 * 1
 * 2 6
 * 3 5 7
 * 4 8 9
 * 15 10 12
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { closeReadLine } from "../utils/common";
import { askQuestion } from "../utils/common";
import { printBinaryTreeLevelWise } from "../utils/binary-tree-utils";

/**
 * Helper function to build the binary tree from inOrder and preOrder traversals
 *
 * Time Complexity: O(n²) - In the worst case, for each node we might need to search
 * for its position in the inOrder array, which takes O(n) time.
 * This can be optimized to O(n) by using a hash map to store indices.
 *
 * Space Complexity: O(h) - Where h is the height of the tree due to recursion stack.
 *
 * @param inOrder The inOrder traversal array
 * @param preOrder The preOrder traversal array
 * @param inStart Start index of inOrder subarray
 * @param inEnd End index of inOrder subarray
 * @param preStart Start index of preOrder subarray
 * @param preEnd End index of preOrder subarray
 * @returns The root of the constructed binary tree
 */
function buildTreeHelper(
  inOrder: number[],
  preOrder: number[],
  inStart: number,
  inEnd: number,
  preStart: number,
  preEnd: number
): BinaryTreeNode<number> | null {
  if (inStart > inEnd) {
    // Empty array
    return null;
  }

  // Root is the first element of preOrder traversal
  const rootData = preOrder[preStart];

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

  const leftPreStart = preStart + 1;
  const leftPreEnd = leftPreStart + (leftInEnd - leftInStart);
  const rightPreStart = leftPreEnd + 1;
  const rightPreEnd = preEnd;

  // Create the root node
  const root = new BinaryTreeNode<number>(rootData);

  // Recursively build left and right subtrees
  root.left = buildTreeHelper(
    inOrder,
    preOrder,
    leftInStart,
    leftInEnd,
    leftPreStart,
    leftPreEnd
  );

  root.right = buildTreeHelper(
    inOrder,
    preOrder,
    rightInStart,
    rightInEnd,
    rightPreStart,
    rightPreEnd
  );

  return root;
}

/**
 * Constructs a binary tree from preOrder and inOrder traversals
 *
 * @param preOrder The preOrder traversal array
 * @param inOrder The inOrder traversal array
 * @returns The root of the constructed binary tree
 */
function buildTree(
  preOrder: number[],
  inOrder: number[]
): BinaryTreeNode<number> | null {
  if (
    preOrder.length === 0 ||
    inOrder.length === 0 ||
    preOrder.length !== inOrder.length
  ) {
    return null;
  }

  return buildTreeHelper(
    inOrder,
    preOrder,
    0,
    inOrder.length - 1,
    0,
    preOrder.length - 1
  );
}

/**
 * Main function to run the binary tree construction
 */
async function main() {
  try {
    const n = parseInt(await askQuestion("Enter the number of nodes: "));

    const preOrderInput = await askQuestion(
      "Enter the preOrder traversal (space-separated): "
    );
    const preOrder = preOrderInput.split(" ").map(Number);

    const inOrderInput = await askQuestion(
      "Enter the inOrder traversal (space-separated): "
    );
    const inOrder = inOrderInput.split(" ").map(Number);

    if (preOrder.length !== n || inOrder.length !== n) {
      console.error("Input arrays must have exactly n elements");
      closeReadLine();
      return;
    }

    const root = buildTree(preOrder, inOrder);

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
 * InOrder:   4 2 5 1 8 6 9 3 7
 * PreOrder:  1 2 4 5 3 6 8 9 7
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

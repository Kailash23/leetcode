import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { takeTreeInput, printTreeLevelWise } from "../utils/tree-utils";

/**
 * Finds the node with the second largest value in the tree
 * @param root The root node of the tree
 * @returns The node with the second largest value, or null if not found
 */
export function secondLargest(
  root: TreeNode<number> | null
): TreeNode<number> | null {
  if (root === null) {
    return null;
  }

  // Initialize values for tracking largest and second largest
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;

  // Initialize nodes for tracking largest and second largest
  let maxNode: TreeNode<number> | null = null;
  let secondMaxNode: TreeNode<number> | null = null;

  // Start with the root
  first = root.data;
  maxNode = root;

  // Use level-order traversal with a queue
  const pendingNodes: TreeNode<number>[] = [];
  pendingNodes.push(root);

  while (pendingNodes.length > 0) {
    const frontNode = pendingNodes.shift()!;

    // Check all children of the current node
    for (const child of frontNode.children) {
      // Case 1: Child is greater than both first and second
      if (child.data > first) {
        // Current largest becomes second largest
        second = first;
        secondMaxNode = maxNode;

        // Child becomes the new largest
        first = child.data;
        maxNode = child;
      }
      // Case 2: Child is between first and second
      else if (child.data < first && child.data > second) {
        // Child becomes the new second largest
        second = child.data;
        secondMaxNode = child;
      }

      // Add child to queue for processing
      pendingNodes.push(child);
    }
  }

  return secondMaxNode;
}

/**
 * Main function to run the tree operations
 */
async function main() {
  try {
    const root = await takeTreeInput();

    console.log("\nTree in level-wise format:");
    printTreeLevelWise(root);

    const secondMaxNode = secondLargest(root);

    if (secondMaxNode) {
      console.log(`\nSecond largest element: ${secondMaxNode.data}`);
    } else {
      console.log("\nNo second largest element found");
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
 * Example:
 * For a tree with values: 10, 20, 30, 40, 50
 * The second largest element would be 40
 */

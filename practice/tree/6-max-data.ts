import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { takeTreeInput } from "../utils/tree-utils";

/**
 * Finds the node with the maximum data value in the tree
 * @param root The root node of the tree
 * @returns The node with the maximum data value, or null if the tree is empty
 */
export function maxDataNode(
  root: TreeNode<number> | null
): TreeNode<number> | null {
  if (root === null) {
    return null;
  }

  // Queue for level-order traversal
  const pendingNodes: TreeNode<number>[] = [];
  pendingNodes.push(root);

  let maxNode = root; // Initially, root is the max node
  let maxValue = root.data; // Initially, root's data is the max value

  while (pendingNodes.length > 0) {
    const frontNode = pendingNodes.shift()!;

    // Check all children of the current node
    for (const child of frontNode.children) {
      if (child.data > maxValue) {
        maxNode = child;
        maxValue = child.data;
      }

      // Add child to queue for processing
      pendingNodes.push(child);
    }
  }

  return maxNode;
}

/**
 * Main function to run the tree operations
 */
async function main() {
  try {
    const root = await takeTreeInput();

    const maxNode = maxDataNode(root);
    console.log(`\nMax Node: ${maxNode?.data}`);

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

// Enter root data:
// 5
// Enter num of children of 5 :
// 3
// Enter child '1' of 5 :
// 1
// Enter child '2' of 5 :
// 4
// Enter child '3' of 5 :
// 2
// Enter num of children of 1 :
// 2
// Enter child '1' of 1 :
// 1
// Enter child '2' of 1 :
// 3
// Enter num of children of 4 :
// 0
// Enter num of children of 2 :
// 0
// Enter num of children of 1 :
// 0
// Enter num of children of 3 :
// 0

// Max Node: 5

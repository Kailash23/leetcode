import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { takeTreeInput, printTreeLevelWise } from "../utils/tree-utils";

/**
 * Counts the number of leaf nodes in a tree
 * A leaf node is a node with no children
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once through recursion.
 * At each node, it performs O(1) operations (checking if it's a leaf) plus iterating through its children.
 * The total number of operations is proportional to the number of nodes.
 *
 * Space Complexity: O(w) - Where w is the maximum width of the tree (maximum number of nodes at any level).
 * The queue used for level-order traversal will contain at most w nodes at any point in time.
 * In the worst case of a completely balanced tree, the maximum width could be n/2 nodes (at the last level),
 * which simplifies to O(n).
 *
 * @param root The root node of the tree
 * @returns The number of leaf nodes in the tree
 */
export function numLeafNodes(root: TreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  let count = 0;
  const pendingNodes: TreeNode<number>[] = [];
  pendingNodes.push(root);

  while (pendingNodes.length > 0) {
    const frontNode = pendingNodes.shift()!;

    // If node has no children, it's a leaf node
    if (frontNode.children.length === 0) {
      count++;
    }

    // Add all children to the queue for processing
    for (const child of frontNode.children) {
      pendingNodes.push(child);
    }
  }

  return count;
}

/**
 * Main function to run the tree operations
 */
async function main() {
  try {
    const root = await takeTreeInput();

    console.log("\nTree in level-wise format:");
    printTreeLevelWise(root);

    const leafCount = numLeafNodes(root);
    console.log(`Num of leaf node: ${leafCount}`);

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
// 5
// Enter child '3' of 5 :
// 3
// Enter num of children of 1 :
// 2
// Enter child '1' of 1 :
// 1
// Enter child '2' of 1 :
// 4
// Enter num of children of 5 :
// 0
// Enter num of children of 3 :
// 0
// Enter num of children of 1 :
// 0
// Enter num of children of 4 :
// 0

// Tree in level-wise format:
// 5:1,5,3
// 1:1,4
// 5:
// 3:
// 1:
// 4:

// Num of leaf node: 4

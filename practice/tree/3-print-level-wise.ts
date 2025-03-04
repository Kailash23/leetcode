import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { printTreeLevelWise, takeTreeInput } from "../utils/tree-utils";

/**
 * Main function to run the level-wise tree input and printing
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The printTreeLevelWise function processes each node exactly once in a level-order traversal.
 * For each node, it performs O(1) operations plus iterating through its children.
 * Across the entire tree, we visit each node once and each edge once, resulting in O(n) complexity.
 *
 * Space Complexity: O(w) - Where w is the maximum width of the tree (maximum number of nodes at any level).
 * The queue used for level-order traversal will contain at most w nodes at any point in time.
 * This is because:
 * 1. We add nodes to the queue level by level
 * 2. Before processing any node at the next level, we must first process all nodes at the current level
 * 3. The maximum number of nodes in the queue will occur when we've just finished adding all nodes from the widest level
 *
 * In the worst case of a completely balanced tree, the maximum width could be n/2 nodes (at the last level),
 * which simplifies to O(n).
 */
async function main() {
  const root = await takeTreeInput();

  console.log("\nTree in level-wise format:");
  printTreeLevelWise(root);

  closeReadLine();
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
// 2
// Enter child '2' of 5 :
// 7
// Enter child '3' of 5 :
// 1
// Enter num of children of 2 :
// 3
// Enter child '1' of 2 :
// 1
// Enter child '2' of 2 :
// 2
// Enter child '3' of 2 :
// 3
// Enter num of children of 7 :
// 0
// Enter num of children of 1 :
// 0
// Enter num of children of 1 :
// 0
// Enter num of children of 2 :
// 0
// Enter num of children of 3 :
// 0

// Tree in level-wise format:
// 5:2,7,1
// 2:1,2,3
// 7:
// 1:
// 1:
// 2:
// 3:

import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { takeTreeInput, printTreeLevelWise } from "../utils/tree-utils";
import { askQuestion } from "../utils/common";

/**
 * Prints all nodes at level k in the tree
 * Root is at level 0, its children at level 1, and so on
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * In the worst case, the function might need to visit all nodes in the tree to reach level k.
 * However, if k is small compared to the height of the tree, the function will only visit
 * a subset of nodes. But for complexity analysis, we consider the worst case.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n). The space complexity is determined by the
 * maximum depth of the recursion, which corresponds to the height of the tree.
 *
 * @param root The root node of the tree
 * @param k The level at which to print nodes (0-indexed)
 */
export function printAtLevelK(root: TreeNode<number> | null, k: number): void {
  if (root === null) {
    return;
  }

  // If we've reached the desired level, print the node
  if (k === 0) {
    console.log(root.data);
    return;
  }

  // Recursively call for all children with decremented level
  for (const child of root.children) {
    printAtLevelK(child, k - 1);
  }
}

/**
 * Main function to run the tree operations
 */
async function main() {
  try {
    const root = await takeTreeInput();

    console.log("\nTree in level-wise format:");
    printTreeLevelWise(root);

    const k = parseInt(await askQuestion("\nEnter level k: "));

    console.log(`\nNodes at level ${k}:`);
    printAtLevelK(root, k);

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
// 2
// Enter child '3' of 5 :
// 3
// Enter num of children of 1 :
// 2
// Enter child '1' of 1 :
// 4
// Enter child '2' of 1 :
// 2
// Enter num of children of 2 :
// 0
// Enter num of children of 3 :
// 0
// Enter num of children of 4 :
// 0
// Enter num of children of 2 :
// 0

// Tree in level-wise format:
// 5:1,2,3
// 1:4,2
// 2:
// 3:
// 4:
// 2:

// Enter level k: 2

// Nodes at level 2:
// 4
// 2

import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { printTree, takeTreeInput } from "../utils/tree-utils";

/**
 * Calculates the height of the tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once through recursion.
 * At each node, it performs O(1) operations plus iterating through its children.
 * Finding the maximum height among children takes O(c) time where c is the number of children,
 * but across the entire tree, we process each node once, resulting in O(n) overall.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n). The space complexity is determined by the
 * maximum depth of the recursion, which corresponds to the height of the tree.
 *
 * @param root The root node of the tree
 * @returns The height of the tree (root alone has height 1)
 */
export function height(root: TreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  let maxChildHeight = 0;

  // Find the maximum height among all children
  for (const child of root.children) {
    const childHeight = height(child);
    if (childHeight > maxChildHeight) {
      maxChildHeight = childHeight;
    }
  }

  // Add 1 for the current level (root)
  return maxChildHeight + 1;
}

/**
 * Main function to run the tree operations
 */
async function main() {
  try {
    const root = await takeTreeInput();

    console.log("\nTree structure:");
    printTree(root);

    const treeHeight = height(root);
    console.log(`\nHeight of Tree: ${treeHeight}`);

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
// 5
// Enter child '2' of 5 :
// 1
// Enter child '3' of 5 :
// 1
// Enter num of children of 5 :
// 0
// Enter num of children of 1 :
// 2
// Enter child '1' of 1 :
// 1
// Enter child '2' of 1 :
// 2
// Enter num of children of 1 :
// 0
// Enter num of children of 1 :
// 0
// Enter num of children of 2 :
// 0

// Tree in level-wise format:
// 5:5,1,1
// 5:
// 1:1,2
// 1:
// 1:
// 2:
//
// Height of Tree: 3

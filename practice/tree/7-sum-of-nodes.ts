import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { takeTreeInput, printTree } from "../utils/tree-utils";

/**
 * Calculates the sum of all node values in the tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once through recursion.
 * At each node, it performs O(1) operations (addition) plus iterating through its children.
 * The total number of operations is proportional to the number of nodes.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n). The space complexity is determined by the
 * maximum depth of the recursion, which corresponds to the height of the tree.
 *
 * @param root The root node of the tree
 * @returns The sum of all node values in the tree
 */
export function sumNodes(root: TreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  let sum = 0; // Count the root node

  // Count all children recursively
  for (const child of root.children) {
    sum += sumNodes(child);
  }

  return root.data + sum;
}

/**
 * Main function to run the tree operations
 */
async function main() {
  try {
    const root = await takeTreeInput();

    console.log("\nTree in level-wise format:");
    printTree(root);

    const nodeSum = sumNodes(root);
    console.log(`\n\nSum of nodes: ${nodeSum}`);

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
// 6
// Enter child '3' of 5 :
// 2
// Enter num of children of 1 :
// 2
// Enter child '1' of 1 :
// 3
// Enter child '2' of 1 :
// 2
// Enter num of children of 6 :
// 0
// Enter num of children of 2 :
// 0
// Enter num of children of 3 :
// 0
// Enter num of children of 2 :
// 0

// Tree in level-wise format:
// 5
//   1
//     3
//     2
//   6
//   2

// Sum of nodes: 19

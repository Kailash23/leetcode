import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { takeTreeInput, printTreeLevelWise } from "../utils/tree-utils";
import { askQuestion } from "../utils/common";

/**
 * Prints all nodes at level k in the tree
 * Root node is considered as level 0
 * @param root The root node of the tree
 * @param k The level to print
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

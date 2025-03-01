import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { printTreeLevelWise, takeTreeInput } from "../utils/tree-utils";

/**
 * Main function to run the level-wise tree input and printing
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

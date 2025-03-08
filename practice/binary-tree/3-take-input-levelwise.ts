import {
  printBinaryTree,
  takeBinaryTreeInputLevelWise,
} from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();
    console.log();
    printBinaryTree(root);

    // Close the readline interface
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
 * Example tree structure:
 *            1
 *         /     \
 *        2       3
 *      /  \    /  \
 *     4    5  6    7
 *         / \
 *        8   9
 *
 * Input sequence:
 * Root: 1
 * Left of 1: 2, Right of 1: 3
 * Left of 2: 4, Right of 2: 5
 * Left of 3: 6, Right of 3: 7
 * Left of 4: -1, Right of 4: -1
 * Left of 5: 8, Right of 5: 9
 * Left of 6: -1, Right of 6: -1
 * Left of 7: -1, Right of 7: -1
 * Left of 8: -1, Right of 8: -1
 * Left of 9: -1, Right of 9: -1
 *
 * Output:
 * 1:L2R3
 * 2:L4R5
 * 4:
 * 5:L8R9
 * 8:
 * 9:
 * 3:L6R7
 * 6:
 * 7:
 */

import { TreeNode } from "./core/tree-node";
import { printTree } from "../utils/tree-utils";
import { askQuestion, closeReadLine } from "../utils/common";

/**
 * Takes input for a tree in hierarchical order using recursion
 * @returns A Promise that resolves with the root node of the tree
 */
async function takeInput(): Promise<TreeNode<number>> {
  const rootData = parseInt(await askQuestion("Enter data: "));
  const root = new TreeNode<number>(rootData);

  const numChild = parseInt(
    await askQuestion(`Enter num of children of ${rootData}: `)
  );

  for (let i = 0; i < numChild; i++) {
    const child = await takeInput(); // Recursive call to create child nodes
    root.addChild(child); // Link child to root
  }

  return root;
}

/**
 * Main function to run the tree input and printing
 */
async function main() {
  const root = await takeInput();

  console.log("\nTree output:");
  printTree(root);

  closeReadLine();
}

// Run the main function
main().catch((error) => {
  console.error("An error occurred:", error);
  closeReadLine();
});

// Enter data: 3
// Enter num of children of 3: 2
// Enter data: 1
// Enter num of children of 1: 0
// Enter data: 1
// Enter num of children of 1: 0

// Tree output:
// 3
//   1
//   1

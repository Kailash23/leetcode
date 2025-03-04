import { TreeNode } from "./core/tree-node";
import { printTree } from "../utils/tree-utils";
import { askQuestion, closeReadLine } from "../utils/common";

/**
 * Takes input for a tree in hierarchical order using recursion
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree. The function makes exactly one
 * recursive call for each child node, and each call involves constant-time operations (parsing input,
 * creating a node, and adding a child).
 *
 * Space Complexity: O(h) - Where h is the height of the tree. This accounts for:
 *   - O(h) space for the recursion stack, where h is the maximum depth of recursion
 *   - O(n) space for storing the tree nodes, but this is considered output space
 * The limiting factor is the recursion stack depth, which depends on the tree height.
 *
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

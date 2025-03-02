import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { printTree, takeTreeInput } from "../utils/tree-utils";

/**
 * Recursively deletes a tree
 * @param root The root node of the tree to delete
 */
export function deleteTree<T>(root: TreeNode<T> | null): void {
  if (root === null) {
    return;
  }

  // First recursively delete all children
  for (const child of [...root.children]) {
    deleteTree(child);

    // Remove the child from the parent's children array
    const index = root.children.indexOf(child);
    if (index !== -1) {
      root.children.splice(index, 1);
    }
  }

  // Log the deletion (for demonstration purposes)
  console.log(`Deleting node with data: ${root.data}`);

  // In JavaScript/TypeScript, the garbage collector will handle the actual memory cleanup
  // once there are no more references to the node
}

/**
 * Main function to demonstrate tree deletion
 */
async function main() {
  try {
    console.log("Building a tree:");
    const root = await takeTreeInput();

    printTree(root);

    console.log("\nDeleting the tree...");
    deleteTree(root);
    console.log("Tree deletion complete");

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
 * Note on memory management:
 *
 * In C++, manual memory management is required, and the 'delete' operator
 * is used to free memory allocated with 'new'.
 *
 * In TypeScript/JavaScript, memory is managed by the garbage collector.
 * Objects are automatically cleaned up when they are no longer referenced.
 *
 * This implementation simulates the deletion process by:
 * 1. Recursively removing children from their parent's array
 * 2. Logging the deletion process
 *
 * Once all references to a node are removed, the JavaScript garbage collector
 * will automatically free the memory.
 */

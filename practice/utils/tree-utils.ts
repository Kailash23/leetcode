import { TreeNode } from "../tree/core/tree-node";

/**
 * Print the tree structure (for debugging/visualization)
 */
export function printTree<T>(root: TreeNode<T>, level: number = 0): void {
  // Print the current node with proper indentation
  console.log("  ".repeat(level) + root.data);

  // Recursively print all children
  for (const child of root.children) {
    printTree(child, level + 1);
  }
}

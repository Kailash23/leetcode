import { TreeNode } from "./core/tree-node";
import { printTree } from "../utils/tree-utils";

/**
 * Create an example tree for testing
 *
 * Time Complexity: O(1) - This function creates a fixed number of nodes (7) and performs a fixed number
 * of operations to connect them. The printTree function's complexity is not included in this analysis
 * as it's a separate utility function.
 *
 * Space Complexity: O(1) - The function creates a fixed number of TreeNode objects (7) regardless of input.
 */
export function createExampleTree(): TreeNode<number> {
  const root = new TreeNode<number>(1); // root
  const node1 = new TreeNode<number>(2); // child
  const node2 = new TreeNode<number>(3); // child

  root.addChild(node1); // Making link of child 1 to root
  root.addChild(node2); // Making link of child 2 to root

  // Add some grandchildren to make the tree more interesting
  node1.addChild(new TreeNode<number>(4));
  node1.addChild(new TreeNode<number>(5));
  node2.addChild(new TreeNode<number>(6));

  // Print with arrow notation
  console.log("Tree structure:");
  printTree(root);

  return root;
}

createExampleTree();

// Tree structure:
// 1
//   2
//     4
//     5
//   3
//     6

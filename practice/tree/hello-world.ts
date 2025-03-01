import { TreeNode } from "./core/tree-node";
import { printTree } from "../utils/tree-utils";

/**
 * Create an example tree for testing
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
  console.log("Tree structure with arrows:");
  printTree(root);

  return root;
}

createExampleTree();

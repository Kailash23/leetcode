import { TreeNode } from "../tree/core/tree-node";
import { askQuestion } from "./common";

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

/**
 * Takes input level-wise using a queue
 * @returns A Promise that resolves with the root node of the tree
 */
export async function takeTreeInput(): Promise<TreeNode<number>> {
  const rootData = parseInt(await askQuestion("Enter root data:\n"));
  const root = new TreeNode<number>(rootData);

  // Queue to process nodes level by level
  const pendingNodes: TreeNode<number>[] = [];
  pendingNodes.push(root);

  while (pendingNodes.length > 0) {
    const frontNode = pendingNodes.shift()!; // Remove and get the front node

    const numChild = parseInt(
      await askQuestion(`Enter num of children of ${frontNode.data} :\n`)
    );

    for (let i = 0; i < numChild; i++) {
      const childData = parseInt(
        await askQuestion(`Enter child '${i + 1}' of ${frontNode.data} :\n`)
      );

      const child = new TreeNode<number>(childData);
      frontNode.addChild(child);
      pendingNodes.push(child);
    }
  }

  return root;
}

/**
 * Prints the tree level-wise using a queue
 * @param root The root node of the tree
 */
export function printTreeLevelWise(root: TreeNode<number> | null): void {
  if (root === null) {
    return;
  }

  const pendingNodes: TreeNode<number>[] = [];
  pendingNodes.push(root);

  while (pendingNodes.length > 0) {
    const frontNode = pendingNodes.shift()!;

    // Print current node and its children
    process.stdout.write(`${frontNode.data}:`);

    for (let i = 0; i < frontNode.children.length; i++) {
      if (i === frontNode.children.length - 1) {
        // If last child, don't print comma
        process.stdout.write(`${frontNode.children[i].data}`);
      } else {
        process.stdout.write(`${frontNode.children[i].data},`);
      }
    }

    console.log();

    // Add all children to the queue for next level processing
    for (const child of frontNode.children) {
      pendingNodes.push(child);
    }
  }
}

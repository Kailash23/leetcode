import { TreeNode } from "./core/tree-node";
import { closeReadLine } from "../utils/common";
import { takeTreeInput } from "../utils/tree-utils";

/**
 * Pre-Order Traversal of generic tree using recursion
 * Visits root first, then children from left to right
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once through recursion.
 * At each node, it performs O(1) operations (printing) plus iterating through its children.
 * The total number of operations is proportional to the number of nodes.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n). The space complexity is determined by the
 * maximum depth of the recursion, which corresponds to the height of the tree.
 *
 * @param root The root node of the tree
 */
export function preOrder(root: TreeNode<number> | null): void {
  if (root === null) {
    return;
  }

  // Print root first
  process.stdout.write(`${root.data} `);

  // Then recursively visit all children
  for (const child of root.children) {
    preOrder(child);
  }
}

/**
 * Post-Order Traversal of generic tree using recursion
 * Visits all children from left to right, then root
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once through recursion.
 * At each node, it performs O(1) operations (printing) plus iterating through its children.
 * The total number of operations is proportional to the number of nodes.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n). The space complexity is determined by the
 * maximum depth of the recursion, which corresponds to the height of the tree.
 *
 * @param root The root node of the tree
 */
export function postOrder(root: TreeNode<number> | null): void {
  if (root === null) {
    return;
  }

  // First recursively visit all children
  for (const child of root.children) {
    postOrder(child);
  }

  // Then print root
  process.stdout.write(`${root.data} `);
}

/**
 * Level-Order Traversal (sometimes called "In-Order" for generic trees)
 * Visits nodes level by level from top to bottom, left to right
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function uses level-order traversal to visit each node exactly once.
 * At each node, it performs O(1) operations (printing) plus iterating through its children.
 * Across the entire tree, we process each node once, resulting in O(n) overall.
 *
 * Space Complexity: O(w) - Where w is the maximum width of the tree (maximum number of nodes at any level).
 * The queue used for level-order traversal will contain at most w nodes at any point in time.
 * In the worst case of a completely balanced tree, the maximum width could be n/2 nodes (at the last level),
 * which simplifies to O(n).
 *
 * @param root The root node of the tree
 */
export function levelOrder(root: TreeNode<number> | null): void {
  if (root === null) {
    return;
  }

  const pendingNodes: TreeNode<number>[] = [];
  pendingNodes.push(root);

  while (pendingNodes.length > 0) {
    const frontNode = pendingNodes.shift()!;

    // Print current node
    process.stdout.write(`${frontNode.data} `);

    // Add all children to the queue for next level processing
    for (const child of frontNode.children) {
      pendingNodes.push(child);
    }
  }
}

/**
 * Main function to run the tree traversals
 */
async function main() {
  try {
    const root = await takeTreeInput();

    console.log("Pre-order:");
    preOrder(root);

    console.log("\nPost-order:");
    postOrder(root);

    console.log("\nLevel-order:");
    levelOrder(root);
    console.log();

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

// Example tree structure:
//         1
//     /   |   \
//    2    3    4
//   / \  / \
//  5  6 7   8
//             \
//              9
//
// Pre-order: 1 2 5 6 3 7 8 9 4
// Post-order: 5 6 2 7 9 8 3 4 1
// Level-order: 1 2 3 4 5 6 7 8 9

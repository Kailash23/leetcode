import { BinaryTreeNode } from "../binary-tree/core/binary-tree-node";
import { askQuestion } from "./common";

export function printBinaryTree(root: BinaryTreeNode<number> | null): void {
  if (root === null) {
    // Base Case
    return;
  }

  process.stdout.write(`${root.data}:`);

  if (root.left !== null) {
    // Check if left exists
    process.stdout.write(`L${root.left.data}`);
  }

  if (root.right !== null) {
    // Check if right exists
    process.stdout.write(`R${root.right.data}`);
  }

  console.log(); // New line
  printBinaryTree(root.left);
  printBinaryTree(root.right);
}

/**
 * Takes input level-wise to build a binary tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * Each node is processed exactly once.
 *
 * Space Complexity: O(w) - Where w is the maximum width of the tree.
 * The queue will contain at most w nodes at any point in time.
 * In a balanced binary tree, the maximum width is n/2 in the worst case (at the last level),
 * which simplifies to O(n).
 */
export async function takeBinaryTreeInputLevelWise(): Promise<BinaryTreeNode<number> | null> {
  const rootData = parseInt(await askQuestion("Enter root data\n"));

  if (rootData === -1) {
    // if data is -1 consider it as no child node
    return null;
  }

  const root = new BinaryTreeNode<number>(rootData);
  const pendingNodes: BinaryTreeNode<number>[] = []; // queue to input level-wise
  pendingNodes.push(root);

  while (pendingNodes.length > 0) {
    const front = pendingNodes.shift()!;

    // Process left child
    const leftChildData = parseInt(
      await askQuestion(`Enter left child of ${front.data}\n`)
    );
    if (leftChildData !== -1) {
      const leftChild = new BinaryTreeNode<number>(leftChildData);
      front.left = leftChild;
      pendingNodes.push(leftChild); // Push child node for inputing their child nodes
    }

    // Process right child
    const rightChildData = parseInt(
      await askQuestion(`Enter right child of ${front.data}\n`)
    );
    if (rightChildData !== -1) {
      const rightChild = new BinaryTreeNode<number>(rightChildData);
      front.right = rightChild;
      pendingNodes.push(rightChild); // Push child node for inputing their child nodes
    }
  }

  return root;
}

/**
 * Calculates the height of a binary tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * The function visits each node exactly once through recursion.
 *
 * Space Complexity: O(h) - Where h is the height of the tree.
 * This is due to the recursion stack, which in the worst case (a skewed tree) could be O(n),
 * but in a balanced tree would be O(log n).
 *
 * @param root The root node of the binary tree
 * @returns The height of the tree (0 for empty tree)
 */
export function getHeight(root: BinaryTreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  // Calculate height of left and right subtrees
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  // Height is 1 (for current node) + maximum of left and right subtree heights
  return 1 + Math.max(leftHeight, rightHeight);
}

/**
 * Prints the binary tree in level-wise order with the specified format
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * Each node is processed exactly once in the level-order traversal.
 *
 * Space Complexity: O(w) - Where w is the maximum width of the tree.
 * The queue will contain at most w nodes at any point in time.
 * In a balanced binary tree, the maximum width is n/2 in the worst case (at the last level),
 * which simplifies to O(n).
 */
export function printBinaryTreeLevelWise(
  root: BinaryTreeNode<number> | null
): void {
  if (root === null) {
    return;
  }

  const pendingNodes: BinaryTreeNode<number>[] = [];
  pendingNodes.push(root);

  while (pendingNodes.length > 0) {
    const front = pendingNodes.shift()!;

    process.stdout.write(`${front.data}:`);

    // Process left child
    if (front.left !== null) {
      process.stdout.write(`L:${front.left.data}`);
      pendingNodes.push(front.left);
    } else {
      process.stdout.write("L:-1");
    }

    // Process right child
    if (front.right !== null) {
      process.stdout.write(`,R:${front.right.data}`);
      pendingNodes.push(front.right);
    } else {
      process.stdout.write(",R:-1");
    }

    console.log(); // New line
  }
}

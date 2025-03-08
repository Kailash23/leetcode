/**
 * Level wise linked list
 *
 * Given a binary tree, write code to create a separate linked list for each level.
 * You need to return the array which contains head of each level linked list.
 *
 * Input format:
 * Elements in level order form (separated by space). If any node does not have
 * left or right child, take -1 in its place.
 *
 * Output format: Each level linked list is printed in new line (elements separated
 * by space).
 *
 * Sample Input:
 * 5 6 10 2 3 -1 -1 -1 -1 -1 9 -1 -1
 *
 * Sample Output:
 * 5
 * 6 10
 * 2 3
 * 9
 */

import { BinaryTreeNode } from "./core/binary-tree-node";
import { takeBinaryTreeInputLevelWise } from "../utils/binary-tree-utils";
import { closeReadLine } from "../utils/common";

/**
 * Node class for the linked list
 */
class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Prints a linked list
 *
 * @param head The head of the linked list
 */
function printLinkedList(head: ListNode<number> | null): void {
  let current = head;
  const values: number[] = [];

  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }

  console.log(values.join(" "));
}

/**
 * Creates a linked list for each level of the binary tree
 *
 * Time Complexity: O(n) - Where n is the number of nodes in the tree.
 * We visit each node exactly once.
 *
 * Space Complexity: O(n) - For storing the nodes in the queue and the linked lists.
 *
 * @param root The root node of the binary tree
 * @returns An array containing the head of each level's linked list
 */
function createLLForEachLevel(
  root: BinaryTreeNode<number> | null
): Array<ListNode<number> | null> {
  if (root === null) {
    return []; // If root is NULL return empty array
  }

  const listHeads: Array<ListNode<number> | null> = []; // Array for storing head of linked list formed at each level
  const pendingNodes: BinaryTreeNode<number>[] = []; // Queue for level-order traversal

  pendingNodes.push(root);

  while (pendingNodes.length > 0) {
    const nodeCount = pendingNodes.length; // Number of nodes at current level
    let head: ListNode<number> | null = null;
    let tail: ListNode<number> | null = null;

    // Process all nodes at current level
    for (let i = 0; i < nodeCount; i++) {
      const front = pendingNodes.shift()!;

      // Create a new linked list node
      const newNode = new ListNode<number>(front.data);

      if (head === null) {
        // First node in the level
        head = newNode;
        tail = newNode;
      } else {
        // Append to the end of the linked list
        tail!.next = newNode;
        tail = newNode;
      }

      // Add children to the queue for next level
      if (front.left !== null) {
        pendingNodes.push(front.left);
      }

      if (front.right !== null) {
        pendingNodes.push(front.right);
      }
    }

    // Add the head of this level's linked list to the result array
    listHeads.push(head);
  }

  return listHeads;
}

// /**
//  * Alternative implementation using a queue with level markers
//  */
// function createLLForEachLevelAlternative(
//   root: BinaryTreeNode<number> | null
// ): Array<ListNode<number> | null> {
//   if (root === null) {
//     return []; // If root is NULL return empty array
//   }

//   const listHeads: Array<ListNode<number> | null> = []; // Array for storing head of linked list formed at each level
//   const pendingNodes: BinaryTreeNode<number>[] = []; // Queue for level-order traversal
//   const mainQueue: (number | null)[] = []; // Queue to store data level-wise, where each level is separated by null

//   pendingNodes.push(root);

//   while (pendingNodes.length > 0) {
//     const nodeCount = pendingNodes.length; // Number of nodes at current level

//     for (let i = 0; i < nodeCount; i++) {
//       const front = pendingNodes.shift()!;
//       mainQueue.push(front.data); // Store front's data in the mainQueue

//       if (front.left !== null) {
//         pendingNodes.push(front.left);
//       }

//       if (front.right !== null) {
//         pendingNodes.push(front.right);
//       }
//     }

//     mainQueue.push(null); // Level separator
//   }

//   while (mainQueue.length > 0) {
//     let head: ListNode<number> | null = null;
//     let tail: ListNode<number> | null = null;

//     // Process nodes until we hit a level separator (null)
//     while (mainQueue.length > 0 && mainQueue[0] !== null) {
//       const frontData = mainQueue.shift() as number;
//       const newNode = new ListNode<number>(frontData);

//       if (head === null) {
//         head = newNode;
//         tail = newNode;
//       } else {
//         tail!.next = newNode;
//         tail = newNode;
//       }
//     }

//     mainQueue.shift(); // Remove the null separator
//     listHeads.push(head);
//   }

//   return listHeads;
// }

/**
 * Main function to run the binary tree operations
 */
async function main() {
  try {
    const root = await takeBinaryTreeInputLevelWise();

    console.log("\nLevel-wise linked lists:");
    const listHeads = createLLForEachLevel(root);

    for (const head of listHeads) {
      printLinkedList(head);
    }

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
 *             / \
 *            8   9
 *
 * Output:
 * 1
 * 2 3
 * 4 5 6 7
 * 8 9
 *
 * Explanation of the algorithm:
 *
 * 1. We perform a level-order traversal of the binary tree using a queue.
 * 2. For each level, we:
 *    - Keep track of how many nodes are at the current level
 *    - Create a linked list from these nodes
 *    - Add the head of this linked list to our result array
 * 3. We continue until we've processed all levels of the tree.
 *
 * The first implementation directly creates the linked lists during the traversal.
 * The alternative implementation first collects all node values with level separators,
 * then creates the linked lists in a second pass.
 *
 * Both approaches have O(n) time complexity, but the first is more space-efficient
 * as it doesn't require the intermediate mainQueue.
 */

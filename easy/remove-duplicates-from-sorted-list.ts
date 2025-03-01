// https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/1536179001/

/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let currentNode = head;

  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.val === currentNode.next.val) {
      // Skip the duplicate node by updating the next pointer
      currentNode.next = currentNode.next.next;
    } else {
      // Move to next node if no duplicate found
      currentNode = currentNode.next;
    }
  }

  return head;
}

// Time Complexity: O(n) where n is the number of nodes in the linked list
// We traverse each node at most once

// Space Complexity: O(1)
// We only use a single pointer variable regardless of input size

// Example:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
// Explanation: Duplicates are removed, keeping only one occurrence of each value

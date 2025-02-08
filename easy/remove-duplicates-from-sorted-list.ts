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

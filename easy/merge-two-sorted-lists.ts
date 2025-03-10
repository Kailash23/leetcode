// https://leetcode.com/problems/merge-two-sorted-lists/

// Time Complexity: O(n + m), where n is the number of nodes in list1 and m is the number of nodes in list2.
// We iterate through both lists once, comparing and merging nodes.

// Space Complexity: O(1), as we are using a constant amount of extra space for the dummy head and mergedTail pointers.

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummyHead = new ListNode(); // Create a dummy head for the merged list to return
  let mergedTail = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      mergedTail.next = list1;
      list1 = list1.next; // Move to the next node in list1
    } else {
      mergedTail.next = list2;
      list2 = list2.next; // Move to the next node in list2
    }
    mergedTail = mergedTail.next;
  }

  mergedTail.next = list1 !== null ? list1 : list2;

  return dummyHead.next;
}

// Example 1 with nodes
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));

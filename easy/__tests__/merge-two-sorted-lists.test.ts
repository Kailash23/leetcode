import { ListNode, mergeTwoLists } from "../merge-two-sorted-lists";

describe("mergeTwoLists", () => {
  it("should merge two sorted lists", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const result = mergeTwoLists(list1, list2);

    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it("should handle empty lists", () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  it("should handle one empty list", () => {
    const list = new ListNode(0);
    const result = mergeTwoLists(null, list);
    expect(listToArray(result)).toEqual([0]);
  });

  // New test case: merging two single-element lists
  it("should merge two lists each with one element", () => {
    const list1 = new ListNode(2);
    const list2 = new ListNode(1);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([1, 2]);
  });
});

// Helper function to convert ListNode to array for testing
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

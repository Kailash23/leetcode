import {
  ListNode,
  deleteDuplicates,
} from "../remove-duplicates-from-sorted-list";

describe("deleteDuplicates", () => {
  // Helper function to create linked list from array
  function createList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }

  // Helper function to convert list to array for testing
  function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }

  it("should handle basic case with duplicates", () => {
    const input = createList([1, 1, 2]);
    const result = deleteDuplicates(input);
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it("should handle multiple duplicates", () => {
    const input = createList([1, 1, 1, 2, 3, 3]);
    const result = deleteDuplicates(input);
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });

  it("should handle no duplicates", () => {
    const input = createList([1, 2, 3, 4]);
    const result = deleteDuplicates(input);
    expect(listToArray(result)).toEqual([1, 2, 3, 4]);
  });

  it("should handle empty list", () => {
    const result = deleteDuplicates(null);
    expect(result).toBeNull();
  });

  it("should handle single element", () => {
    const input = createList([1]);
    const result = deleteDuplicates(input);
    expect(listToArray(result)).toEqual([1]);
  });

  it("should handle all duplicates", () => {
    const input = createList([1, 1, 1, 1, 1]);
    const result = deleteDuplicates(input);
    expect(listToArray(result)).toEqual([1]);
  });

  it("should handle duplicates at end", () => {
    const input = createList([1, 2, 3, 3, 3]);
    const result = deleteDuplicates(input);
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });

  it("should handle duplicates at start", () => {
    const input = createList([1, 1, 1, 2, 3]);
    const result = deleteDuplicates(input);
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });
});

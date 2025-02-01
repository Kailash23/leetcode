// https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
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

// Test cases
function runMergeListsTests(): void {
  const testCases = [
    {
      list1: new ListNode(1, new ListNode(2, new ListNode(4))),
      list2: new ListNode(1, new ListNode(3, new ListNode(4))),
      expected: [1, 1, 2, 3, 4, 4],
    },
    {
      list1: null,
      list2: null,
      expected: [],
    },
    {
      list1: null,
      list2: new ListNode(0),
      expected: [0],
    },
  ];

  testCases.forEach((test, index) => {
    const result = mergeTwoLists(test.list1, test.list2);
    const resultArray: number[] = [];
    let current = result;
    while (current !== null) {
      resultArray.push(current.val);
      current = current.next;
    }

    console.log(`Test Case ${index + 1}:`);
    console.log(`Expected: [${test.expected.join(", ")}]`);
    console.log(`Output: [${resultArray.join(", ")}]`);
    console.log(
      `Result: ${
        JSON.stringify(resultArray) === JSON.stringify(test.expected)
          ? "PASS"
          : "FAIL"
      }`
    );
    console.log("---");
  });
}

runMergeListsTests();

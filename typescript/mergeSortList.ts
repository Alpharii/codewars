// 23. Merge k Sorted Lists
// Hard
// Topics
// Companies
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// Fungsi bantuan: ubah array menjadi linked list
function buildList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Fungsi bantuan: ubah linked list menjadi array (untuk console.log)
function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Fungsi utama yang harus kamu isi
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let mergedArr =[]
    for (let i = 0; i < lists.length; i++) {
        let temp: ListNode | null | undefined = lists[i]
        while(temp !== null){
            mergedArr.push(temp.val)
            temp = temp.next
        }
    }
    let result = mergedArr.sort((a,b) => a -b)
    return buildList(result)
};

const testInput = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6]
];

const linkedLists = testInput.map(arr => buildList(arr));

const mergedListHead = mergeKLists(linkedLists);

console.log(listToArray(mergedListHead)); // Output yang benar seharusnya: [1, 1, 2, 3, 4, 4, 5, 6]
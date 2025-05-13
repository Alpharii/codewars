// 25. Reverse Nodes in k-Group
// Hard
// Topics
// Companies
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple 
// of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNodes {
    val: number
    next: ListNodes | null
    constructor(val?: number, next?: ListNodes | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

//logic (tujuan = menukar array sesuai k)
// 1. buat listnode dummy untuk point ke list node pertama
// 2. buat variabel hitung loop untuk menyimpan k setiapa loop
// 3. buat loop while sampai nextnya null
// 4. di dalam loop while manipulasi next
// 5. 
// 
// 


function reverseKGroup(head: ListNodes | null, k: number): ListNodes | null {
    let arr = []
    let temp: ListNodes | null | undefined = head
    while(true){
        if(temp?.next === null){
            arr.push(temp.val)
            break
        }
        arr.push(temp?.val)
        temp = temp?.next
    }

    let count = 0
    let tempArr = []
    let result = []
    for (let i = 0; i < arr.length; i++) {
        count ++
        tempArr.push(arr[i])
        if(count === k){
            tempArr.reverse()
            result.push(tempArr)
            tempArr = []
            count = 0
        }
        if(i === arr.length -1) result.push(tempArr)
    }
    result = result.reduce((acc, curr) => acc.concat(curr), [])
    return buildLists(result)
};

function buildLists(arr: any): ListNodes | null {
    if (arr.length === 0) return null;
    const head = new ListNodes(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNodes(arr[i]);
        current = current.next;
    }
    return head;
}

const testInputs = buildLists([1])

console.log(console.log(reverseKGroup(testInputs, 2)))

//7 kyu
// Stalin Sort

// "If there is no person, there is no problem"
// Unlike conventional sorting algorithms that rearrange elements, Stalin Sort solves the problem of disorder radically: any element that violates the ascending order is shot and removed from the list.
// Task
// Implement the function stalin_sort / stalinSort, which accepts an array of integers and modifies it in-place, removing all elements that violate the ascending order relative to the previous surviving element.
// All other elements are considered enemies of order and must be eliminated.
// Rules

//     The first element always survives.
//     Each next element survives only if it is ≥ the previous survivor.
//     The order of the survivors is preserved.
//     An empty array remains unchanged.
//     Optionally, print "Расстрелять!" to stdout for each eliminated element.

// Examples

// [1, 2, 3, 4, 5]        →  [1, 2, 3, 4, 5]   (all loyal, no executions)
// [5, 3, 1, 2, 4]        →  [5]                (4 executions)
// [1, 2, 2, 3, 1, 4]     →  [1, 2, 2, 3, 4]   (1 execution)
// [3, 1, 4, 1, 5, 9, 2]  →  [3, 4, 5, 9]      (3 executions)
// []                      →  []                (no one to purge)


// ⚠ The function does not return anything — it modifies the array directly (except for in Solidity).

// ► Complexity: O(n) time, O(1) space — in theory.
// The real-world implementation may vary depending on
// how efficiently your government handles paperwork.



function stalinSort(array: number[]): void {
    let biggestNum = array[0]
    for (let i = 0; i < array.length; i++) {
        if(biggestNum <= array[i]){
            biggestNum = array[i]
        } else {
            array.splice(i, 1)
            i -= 1
        }
    }
}

console.log(stalinSort([1,2,3]))
console.log(stalinSort([5,3,1]))
console.log(stalinSort([3,1,4,1,5,9,2]))
console.log(stalinSort([7,7,7,7]))
console.log(stalinSort([0, 100]))
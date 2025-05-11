// 4. Median of Two Sorted Arrays
// Hard
// Topics
// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let mergedArr: number[] = []
    nums1.map((x) => mergedArr.push(x))
    nums2.map((x) => mergedArr.push(x))
    mergedArr = mergedArr.sort((a, b) => a - b)
    console.log(mergedArr)
    let middle = Math.floor(mergedArr.length/2)

    if(mergedArr.length % 2 === 1) return mergedArr[middle]
    return (mergedArr[middle] + mergedArr[middle -1]) / 2
};

// console.log(findMedianSortedArrays([2,2,4,4], [2,2,2,4,4]))
console.log(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]))
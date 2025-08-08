// 8 kyu
// Merge two sorted arrays into one

// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.

// Any duplicate values are removed, so each integer appears only once.

// If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

package problem

import (
	"sort"
)

func MergeArrays(arr1, arr2 []int) []int {
	res := []int{}

	for _, v := range arr1{
		found := false
		for _, v2 := range res{
			if(v == v2){
				found = true
				break
			}
		}
		if !found {
			res = append(res, v)
		}
	}

	for _, v := range arr2{
		found := false
		for _, v2 := range res{
			if(v == v2){
				found = true
				break
			}
		}
		if !found {
			res = append(res, v)
		}
	}

	sort.Ints(res)
	return res
}

package problem

func SortNumbers(numbers []int) []int {
    res := []int{}

    for _, n := range numbers {
        inserted := false
        for i := 0; i < len(res); i++ {
            if n < res[i] {
                res = append(res[:i], append([]int{n}, res[i:]...)...)
                inserted = true
                break
            }
        }
        if !inserted {
            res = append(res, n)
        }
    }

    return res
}
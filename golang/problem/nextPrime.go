package problem

func NextPrime(n int) int {
    if n <= 1 {
        return 2
    }

    candidate := n + 1
    for {
        isPrime := true

        for i := 2; i*i <= candidate; i++ {
            if candidate%i == 0 {
                isPrime = false
                break
            }
        }

        if isPrime {
            return candidate
        }

        candidate++
    }
}
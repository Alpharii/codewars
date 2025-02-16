package problem

func ContainAllRots(strng string, arr []string) bool {
    if len(strng) == 0 {
        return true
    }

    temp := []string{}
    for i := 0; i < len(strng); i++ {
        temp = append(temp, strng[i:]+strng[:i])
    }

    arrMap := make(map[string]bool)
    for _, s := range arr {
        arrMap[s] = true
    }

    for _, rotation := range temp {
        if !arrMap[rotation] {
            return false
        }
    }

    return true
}
package main

import (
	"codewars-golang/problem"
	"fmt"
)

func main(){
	fmt.Println(problem.ContainAllRots("Ajylvpy", []string{ "Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"}))
}
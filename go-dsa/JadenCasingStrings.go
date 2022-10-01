// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/go

package main

import (
	"fmt"
	"strings"
)

func main() {
	ToJadenCase("most trees are blue")
	ToJadenCase("All the rules in this world were made by someone no smarter than you. So make your own.")
	ToJadenCase("When I die. then you will realize")
	ToJadenCase("Jonah Hill is a genius")
	ToJadenCase("Dying is mainstream")
}

func ToJadenCase(str string) string {
	strSplice := strings.Split(str, " ")
	newSplice := []string{}

	for _, loopStr := range strSplice {
		tempStrSlice := strings.Split(loopStr, "")
		tempStrSlice[0] = strings.ToUpper(tempStrSlice[0])
		newSplice = append(newSplice, strings.Join(tempStrSlice, ""))
	}
	fmt.Println(strings.Join(newSplice, " "))
	return strings.Join(newSplice, " ")
}

// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/go

package main

import (
	"fmt"
	"strings"
)

func main() {
	Solution("abc")
	Solution("dawsd")
	Solution("awsaws")
}

func Solution(str string) []string {
	strSplice := strings.Split(str, "")
	newSplice := []string{}

	if len(strSplice)%2 == 0 {
		for i := 0; i < len(strSplice); i += 2 {
			newSplice = append(newSplice, strSplice[i]+strSplice[i+1])
		}
	} else {
		for i := 1; i < len(strSplice); i += 2 {
			newSplice = append(newSplice, strSplice[i-1]+strSplice[i])
		}
		newSplice = append(newSplice, strSplice[len(strSplice)-1]+"_")
	}

	fmt.Println(newSplice)

	return newSplice

}

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/go

package main

import (
	"fmt"
	"strings"
)

func main() {
	High("what time are we climbing up the volcano")
}

func High(s string) string {
	sSplice := strings.Split(s, " ")
	scoreSplice := []int{}

	for _, value := range sSplice {
		tempSlice := strings.Split(value, "")
		score := 0

		for _, v := range tempSlice {
			score += int([]rune(v)[0]) - 96
		}
		scoreSplice = append(scoreSplice, score)
	}

	highestScoreEl := HighestElementIndex(scoreSplice)

	fmt.Println(sSplice[highestScoreEl])

	return sSplice[highestScoreEl]
}

func HighestElementIndex(scores []int) int {
	highestElIndex := 0

	for index, value := range scores {
		if index > 0 {
			if value > scores[highestElIndex] {
				highestElIndex = index
			}
		}
	}

	return highestElIndex
}

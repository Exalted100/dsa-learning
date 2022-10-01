// https://www.codewars.com/kata/526989a41034285187000de4/train/go

package main

import (
	"strconv"
	"strings"
)

func IpsBetween(start, end string) int {
	firstIp := strings.Split(start, ".")

	secondIp := strings.Split(end, ".")

	firstFirst, _ := strconv.Atoi(firstIp[0])
	firstSecond, _ := strconv.Atoi(firstIp[1])
	firstThird, _ := strconv.Atoi(firstIp[2])
	firstFourth, _ := strconv.Atoi(firstIp[3])

	secondFirst, _ := strconv.Atoi(secondIp[0])
	secondSecond, _ := strconv.Atoi(secondIp[1])
	secondThird, _ := strconv.Atoi(secondIp[2])
	secondFourth, _ := strconv.Atoi(secondIp[3])

	firstValue := (firstFirst * 256 * 256 * 256) + (firstSecond * 256 * 256) + (firstThird * 256) + firstFourth
	secondValue := (secondFirst * 256 * 256 * 256) + (secondSecond * 256 * 256) + (secondThird * 256) + secondFourth

	return secondValue - firstValue
}

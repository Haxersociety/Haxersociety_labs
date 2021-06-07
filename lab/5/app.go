package main

import (
	"fmt"
	"math"
)

func main() {
	var a float64
	var b float64
	var c float64
	fmt.Println("Input A, B, C:")
	fmt.Scanf("%f %f %f", &a, &b, &c)
	if a == 0 && b == 0 {
		if c == 0 {
			fmt.Println("0")
		} else {
			fmt.Println("Error")
		}
	} else if a == 0 {
		var x float64 = -c / b
		fmt.Println("x =", x)
	} else {
		var x1 float64
		var x2 float64
		var D float64
		D = b*b - 4*a*c
		if D >= 0 {
			x1 = (-b + math.Sqrt(D)) / (2 * a)
			x2 = (-b - math.Sqrt(D)) / (2 * a)
			fmt.Println("x1 =", x1, "/ x2 =", x2)
		} else {
			var x3 = complex(-b/(2*a), math.Sqrt(-D)/(2*a))
			var x4 = complex(-b/(2*a), -math.Sqrt(-D)/(2*a))
			fmt.Println("x1 =", x3, " / x2 =", x4)
		}
	}
}

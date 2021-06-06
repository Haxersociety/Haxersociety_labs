package main
import ("fmt"
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
		var x float64 = -c/b
		fmt.Printf("x = %.3f", x)
	} else {
		var x1 float64
		var x2 float64
		var D float64
		D = b*b - 4*a*c
		if D >= 0 {
			x1 = (-b + math.Sqrt(D))/(2*a)
			x2 = (-b - math.Sqrt(D))/(2*a)
			fmt.Printf("x1 = %.3f, x2 = %.3f", x1, x2)
		} else {
			x1 = -b/(2*a)
			x2 = -b/(2*a)
			D = math.Sqrt(-D)/(2*a)
			fmt.Printf("x1 = %.3f + %.3fi / x2 = %.3f - %.3fi", x1, D, x2, D)
		}
	}
}
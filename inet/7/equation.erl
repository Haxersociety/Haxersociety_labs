-module(equation).
-export([eq/3]).
eq(0, 0, 0) -> 0;
eq(0, 0, C) when C /= 0 -> "Error";
eq(0, B, C) -> -C/B;
eq(A, B, C) when is_integer(A), is_integer(B), is_integer(C) ->
	if
		B*B - 4*A*C >= 0 ->
			(-B + math:sqrt(B*B - 4*A*C))/2 + "/" + (-B + math:sqrt(B*B + 4*A*C))/2;
		true -> "Error"
	end.
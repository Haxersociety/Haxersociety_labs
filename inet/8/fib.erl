-module(fib).

-export([fi/1]).
fi(1) -> 1;
fi(N) when N >= 3 ->
	fi(N-1) + fi(N-2);
fi(N) when N < 3 -> 1.
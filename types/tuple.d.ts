
// Shamelessly copied from https://stackoverflow.com/a/60762482

declare namespace BetterTypeScript {
	type GrowToSize<T, N extends number, A extends T[]> = (
		A["length"] extends N
		? A
		: GrowToSize<T, N, [...A, T]>
	);
}

type Tuple<T, N extends number> = BetterTypeScript.GrowToSize<T, N, []>;

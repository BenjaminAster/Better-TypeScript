
/// <reference path="./query-selector.d.ts" />

interface Element {
	matches<K extends string>(selectors: K): this is BetterTypeScript.GetElementNameFromSelector<K>;
	matches<E extends Element = Element>(selectors: string): this is E;
}


/// <reference path="./selector-parser.d.ts" />

interface Element {
	matches<K extends BetterTypeScript.SelectorStringContainingElementName>(selectors: K): this is BetterTypeScript.GetElementTypeFromSelector<K>;
	matches(selectors: string): boolean;
	matches<E extends Element = Element>(selectors: string): this is E;
}

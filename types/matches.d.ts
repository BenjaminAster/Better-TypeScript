
/// <reference path="./query-selector.d.ts" />
/// <reference path="./mathml.d.ts" />

declare namespace BetterTypeScript {
	type SelectorStringContainingElementName = `${`${string} ` | ""}${keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | keyof MathMLElementTagNameMap}${"" | `${"#" | "." | "[" | ":"}${string}`}`;
}

interface Element {
	matches<K extends BetterTypeScript.SelectorStringContainingElementName>(selectors: K): this is BetterTypeScript.GetElementTypeFromSelector<K>;
	matches(selectors: string): boolean;
	matches<E extends Element = Element>(selectors: string): this is E;
}

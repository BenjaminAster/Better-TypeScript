
/// <reference path="./selector-parser.d.ts" />

interface ParentNode extends Node {
	querySelector<K extends string>(selectors: K): BetterTypeScript.GetElementTypeFromSelector<K>;
	querySelectorAll<K extends string>(selectors: K): NodeListOf<BetterTypeScript.GetElementTypeFromSelector<K>>;
}

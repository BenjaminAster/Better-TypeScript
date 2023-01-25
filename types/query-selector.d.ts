
/// <reference path="./mathml.d.ts" />

declare namespace BetterTypeScriptInternals {
	type GetStringAfterLastSpace<Input extends string> = (
		Input extends `${string} ${infer AfterFirstSpace}` ? BetterTypeScriptInternals.GetStringAfterLastSpace<AfterFirstSpace> : Input
	);

	type GetElementNameFromSelector<Input extends string> = (
		BetterTypeScriptInternals.GetStringAfterLastSpace<Input> extends infer AfterLastSpace ? (
			(
				AfterLastSpace extends `${infer BeforeFirstHash}#${string}`
				? BeforeFirstHash
				: AfterLastSpace
			) extends infer Selector ? (
				(
					Selector extends `${infer BeforeFirstPeriod}.${string}`
					? BeforeFirstPeriod
					: Selector
				) extends infer Selector ? (
					(
						Selector extends `${infer BeforeFirstBracket}[${string}`
						? BeforeFirstBracket
						: Selector
					) extends infer Selector ? (
						(
							Selector extends `${infer BeforeFirstColon}:${string}`
							? BeforeFirstColon
							: Selector
						) extends infer ElementName ? (
							ElementName extends keyof HTMLElementTagNameMap
							? HTMLElementTagNameMap[ElementName] | null
							: ElementName extends keyof SVGElementTagNameMap
							? SVGElementTagNameMap[ElementName] | null
							: ElementName extends keyof MathMLElementTagNameMap
							? MathMLElementTagNameMap[ElementName] | null
							: Element
						) : never
					) : never
				) : never
			) : never
		) : never
	);
}


interface ParentNode extends Node {
	querySelector<K extends string>(selectors: K): BetterTypeScriptInternals.GetElementNameFromSelector<K>;
	querySelectorAll<K extends string>(selectors: K): NodeListOf<BetterTypeScriptInternals.GetElementNameFromSelector<K>>;
}


/// <reference path="./mathml.d.ts" />

declare namespace BetterTypeScript {
	type GetStringAfterLastSpace<Input extends string> = (
		Input extends `${string} ${infer AfterFirstSpace}` ? BetterTypeScript.GetStringAfterLastSpace<AfterFirstSpace> : Input
	);

	type GetElementNameFromSelector<Input extends string> = (
		BetterTypeScript.GetStringAfterLastSpace<Input> extends infer AfterLastSpace ? (
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
							? HTMLElementTagNameMap[ElementName]
							: ElementName extends keyof SVGElementTagNameMap
							? SVGElementTagNameMap[ElementName]
							: ElementName extends keyof MathMLElementTagNameMap
							? MathMLElementTagNameMap[ElementName]
							: HTMLElement
						) : never
					) : never
				) : never
			) : never
		) : never
	);
}

interface ParentNode extends Node {
	querySelector<K extends string>(selectors: K): BetterTypeScript.GetElementNameFromSelector<K>;
	querySelectorAll<K extends string>(selectors: K): NodeListOf<BetterTypeScript.GetElementNameFromSelector<K>>;
}

// TODO: .querySelector("something ANY_SVG_OR_MATHML_ELEMENT_TAG_NAME something") returns SVGElement/MathMLElement

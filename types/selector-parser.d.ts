
// Used by query-selector.d.ts and matches.d.ts

declare namespace BetterTypeScript {
	type GetStringAfterLastSpace<Input extends string> = (
		Input extends `${string} ${infer AfterFirstSpace}` ? BetterTypeScript.GetStringAfterLastSpace<AfterFirstSpace> : Input
	);

	type SelectorContainsSVGOrMathMLElement<Input extends string, CurrentElementNamespaceType extends Element = HTMLElement> = (
		Input extends `${infer CurrentSelectorFragment} ${infer AfterFirstSpace}` ? (
			BetterTypeScript.GetElementTypeFromSimpleSelector<CurrentSelectorFragment> extends infer ElementType ? (
				ElementType extends SVGElement
				? SelectorContainsSVGOrMathMLElement<AfterFirstSpace, SVGElement>
				: ElementType extends MathMLElement
				? SelectorContainsSVGOrMathMLElement<AfterFirstSpace, MathMLElement>
				: SelectorContainsSVGOrMathMLElement<AfterFirstSpace, CurrentElementNamespaceType>
			) : never
		) : CurrentElementNamespaceType
	);

	type GetElementTypeFromSimpleSelector<Input extends string> = (
		(
			Input extends `${infer BeforeFirstHash}#${string}`
			? BeforeFirstHash
			: Input
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
						: Element
					) : never
				) : never
			) : never
		) : never
	);

	type GetElementTypeFromSelector<Input extends string> = (
		BetterTypeScript.GetStringAfterLastSpace<Input> extends infer SimpleSelector extends string ? (
			BetterTypeScript.GetElementTypeFromSimpleSelector<SimpleSelector> extends infer ElementType ? (
				Element extends ElementType ? SelectorContainsSVGOrMathMLElement<Input> : ElementType
			) : never
		) : never
	);

	type SelectorStringContainingElementName = `${(
		`${string} ` | ""
	)}${(
		keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | keyof MathMLElementTagNameMap
	)}${(
		"" | `${"#" | "." | "[" | ":"}${string}`
	)}`;
}

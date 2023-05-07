
// Used by query-selector.d.ts and matches.d.ts

declare namespace BetterTypeScript {
	type GetStringAfterLastSpace<Input extends string> = (
		Input extends `${string} ${infer AfterFirstSpace}` ? BetterTypeScript.GetStringAfterLastSpace<AfterFirstSpace> : Input
	);

	enum ElementNamespace {
		HTML = "html",
		SVG = "svg",
		MATHML = "mathml",
	}

	type NamespaceElements = {
		[BetterTypeScript.ElementNamespace.HTML]: HTMLElement;
		[BetterTypeScript.ElementNamespace.SVG]: SVGElement;
		[BetterTypeScript.ElementNamespace.MATHML]: MathMLElement;
	}

	type SelectorContainsSVGOrMathMLElement<Input extends string, CurrentElementNamespace extends ElementNamespace = BetterTypeScript.ElementNamespace.HTML> = (
		Input extends `${infer CurrentSelectorFragment} ${infer AfterFirstSpace}` ? (
			BetterTypeScript.GetElementNamespaceFromSimpleSelector<CurrentSelectorFragment> extends infer ElementNamespace ? (
				ElementNamespace extends (BetterTypeScript.ElementNamespace.SVG | BetterTypeScript.ElementNamespace.MATHML)
				? SelectorContainsSVGOrMathMLElement<AfterFirstSpace, ElementNamespace>
				: SelectorContainsSVGOrMathMLElement<AfterFirstSpace, CurrentElementNamespace>
			) : never
		) : BetterTypeScript.NamespaceElements[CurrentElementNamespace]
	);

	type GetElementNamespaceFromSimpleSelector<Input extends string> = (
		BetterTypeScript.GetElementTagNameFromSimpleSelector<Input> extends infer ElementTagName ? (
			ElementTagName extends keyof HTMLElementTagNameMap
			? BetterTypeScript.ElementNamespace.HTML
			: ElementTagName extends keyof SVGElementTagNameMap
			? BetterTypeScript.ElementNamespace.SVG
			: ElementTagName extends keyof MathMLElementTagNameMap
			? BetterTypeScript.ElementNamespace.MATHML
			: BetterTypeScript.ElementNamespace.HTML
		) : never
	);

	type GetElementTagNameFromSimpleSelector<Input extends string> = (
		(
			Input extends `${infer BeforeFirstHash}#${string}`
			? BeforeFirstHash
			: Input
		) extends infer Selector ? (
			Selector extends `${infer BeforeFirstPeriod}.${string}`
			? BeforeFirstPeriod
			: Selector
		) extends infer Selector ? (
			Selector extends `${infer BeforeFirstBracket}[${string}`
			? BeforeFirstBracket
			: Selector
		) extends infer Selector ? (
			Selector extends `${infer BeforeFirstColon}:${string}`
			? BeforeFirstColon
			: Selector
		) : never : never : never
	);

	type GetElementTypeFromSimpleSelector<Input extends string> = (
		BetterTypeScript.GetElementTagNameFromSimpleSelector<Input> extends infer ElementTagName ? (
			ElementTagName extends keyof HTMLElementTagNameMap
			? HTMLElementTagNameMap[ElementTagName]
			: ElementTagName extends keyof SVGElementTagNameMap
			? SVGElementTagNameMap[ElementTagName]
			: ElementTagName extends keyof MathMLElementTagNameMap
			? MathMLElementTagNameMap[ElementTagName]
			: null
		) : never
	);

	type GetElementTypeFromSelector<Input extends string> = (
		BetterTypeScript.GetStringAfterLastSpace<Input> extends infer SimpleSelector extends string ? (
			BetterTypeScript.GetElementTypeFromSimpleSelector<SimpleSelector> extends infer ElementType ? (
				ElementType extends null ? SelectorContainsSVGOrMathMLElement<Input> : ElementType
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

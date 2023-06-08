
// See also: https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview

declare namespace BetterTypeScript {
	type ChromiumDevtoolsFormatterObjectConfig = Record<string | symbol, any>;

	type ChromiumDevtoolsFormatterElementTagName = (
		| "div"
		| "span"
		| "ol"
		| "li"
		| "table"
		| "tr"
		| "td"
	);

	type ChromiumDevtoolsFormatterElementTemplate = (
		| ChromiumDevtoolsFormatterStyledElementTemplate
		| ChromiumDevtoolsFormatterUnstyledElementTemplate
	);

	type ChromiumDevtoolsFormatterStyledElementTemplate = readonly [
		BetterTypeScript.ChromiumDevtoolsFormatterElementTagName,
		{
			style?: string,
		},
		...BetterTypeScript.ChromiumDevtoolsFormatterItem[],
	];

	type ChromiumDevtoolsFormatterUnstyledElementTemplate = readonly [
		BetterTypeScript.ChromiumDevtoolsFormatterElementTagName,
		...BetterTypeScript.ChromiumDevtoolsFormatterItem[],
	];

	type ChromiumDevtoolsFormatterObjectReference = readonly [
		"object",
		{
			object: any,
			config?: BetterTypeScript.ChromiumDevtoolsFormatterObjectConfig,
		},
	];

	type ChromiumDevtoolsFormatterItem = (
		| string
		| BetterTypeScript.ChromiumDevtoolsFormatterElementTemplate
		| BetterTypeScript.ChromiumDevtoolsFormatterObjectReference
	);

	interface ChromiumDevtoolsFormatter {
		header(object?: any, config?: BetterTypeScript.ChromiumDevtoolsFormatterObjectConfig): BetterTypeScript.ChromiumDevtoolsFormatterItem | null;
		hasBody(object?: any, config?: BetterTypeScript.ChromiumDevtoolsFormatterObjectConfig): boolean;
		body(object?: any, config?: BetterTypeScript.ChromiumDevtoolsFormatterObjectConfig): BetterTypeScript.ChromiumDevtoolsFormatterItem;
	}
}

declare var devtoolsFormatters: BetterTypeScript.ChromiumDevtoolsFormatter[];


// See https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview

declare namespace BetterTypeScript {
	type DevtoolsFormatterObjectConfig = Record<string | symbol, any>;

	type DevtoolsFormatterElementTagName = (
		| "div"
		| "span"
		| "ol"
		| "li"
		| "table"
		| "tr"
		| "td"
	);

	type DevtoolsFormatterElementTemplate = (
		| DevtoolsFormatterStyledElementTemplate
		| DevtoolsFormatterUnstyledElementTemplate
	);

	type DevtoolsFormatterStyledElementTemplate = readonly [
		BetterTypeScript.DevtoolsFormatterElementTagName,
		{
			style?: string,
		},
		...BetterTypeScript.DevtoolsFormatterItem[],
	];

	type DevtoolsFormatterUnstyledElementTemplate = readonly [
		BetterTypeScript.DevtoolsFormatterElementTagName,
		...BetterTypeScript.DevtoolsFormatterItem[],
	];

	type DevtoolsFormatterObjectReference = readonly [
		"object",
		{
			object: any,
			config?: BetterTypeScript.DevtoolsFormatterObjectConfig,
		},
	];

	type DevtoolsFormatterItem = (
		| string
		| BetterTypeScript.DevtoolsFormatterElementTemplate
		| BetterTypeScript.DevtoolsFormatterObjectReference
	);

	interface DevtoolsFormatter {
		header(object?: any, config?: BetterTypeScript.DevtoolsFormatterObjectConfig): BetterTypeScript.DevtoolsFormatterItem | null;
		hasBody(object?: any, config?: BetterTypeScript.DevtoolsFormatterObjectConfig): boolean;
		body(object?: any, config?: BetterTypeScript.DevtoolsFormatterObjectConfig): BetterTypeScript.DevtoolsFormatterItem;
	}
}

declare var devtoolsFormatters: BetterTypeScript.DevtoolsFormatter[];

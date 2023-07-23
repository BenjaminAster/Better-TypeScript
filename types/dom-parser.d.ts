
interface DOMParser {
	parseFromString(string: string, type: "text/html"): Document;
	parseFromString(string: string, type: "application/xml"): XMLDocument;
	parseFromString(string: string, type: "image/svg+xml"): XMLDocument;

	/** @deprecated Use type `"application/xml"` instead */
	parseFromString(string: string, type: "text/xml"): XMLDocument;
	/** @deprecated Use type `"application/xml"` instead */
	parseFromString(string: string, type: "application/xhtml+xml"): XMLDocument;
}

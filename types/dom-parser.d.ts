
interface DOMParser {
	parseFromString(string: string, type: "application/xhtml+xml"): XMLDocument;
	parseFromString(string: string, type: "application/xml"): XMLDocument;
	parseFromString(string: string, type: "image/svg+xml"): XMLDocument;
	parseFromString(string: string, type: "text/html"): Document;
	parseFromString(string: string, type: "text/xml"): XMLDocument;
}

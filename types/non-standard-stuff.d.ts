
// Various non-standard features that are not part of any specification

// Chromium:

declare var chrome: {
	app: any,
	csi(): {
		onloadT: DOMHighResTimeStamp,
		pageT: DOMHighResTimeStamp,
		startE: DOMHighResTimeStamp,
		tran: number,
	},
	loadTimes(): {
		commitLoadTime: DOMHighResTimeStamp,
		connectionInfo: string,
		finishDocumentLoadTime: DOMHighResTimeStamp,
		finishLoadTime: DOMHighResTimeStamp,
		firstPaintAfterLoadTime: DOMHighResTimeStamp,
		firstPaintTime: DOMHighResTimeStamp,
		navigationType: string,
		npnNegotiatedProtocol: string,
		requestTime: DOMHighResTimeStamp,
		startLoadTime: DOMHighResTimeStamp,
		wasAlternateProtocolAvailable: boolean,
		wasFetchedViaSpdy: boolean,
		wasNpnNegotiated: boolean,
	},
};

declare namespace Intl {
	var v8BreakIterator: any;
}

// Brave:

interface Brave {
	isBrave(): Promise<boolean>;
}

declare var Brave: {
	prototype: Brave;
	new(): never;
}

interface Navigator {
	readonly brave: Brave;
}

// Firefox:

interface CSSMozDocumentRule {}

declare var CSSMozDocumentRule: {
	prototype: CSSMozDocumentRule;
	new(): never;
}

// Chromium & WebKit:

interface Element {
	scrollIntoViewIfNeeded(centerIfNeeded: boolean): void;
}

declare function webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
declare function webkitCancelAnimationFrame(handle: number): void;

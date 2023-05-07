
// Various non-standard features that are not part of any specification

// Chromium:

declare namespace chrome {
	var app: any;
	function csi(): {
		onloadT: DOMHighResTimeStamp,
		pageT: DOMHighResTimeStamp,
		startE: DOMHighResTimeStamp,
		tran: number,
	};
	function loadTimes(): {
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
	};
}

declare namespace Intl {
	var v8BreakIterator: any;
}

interface Performance {
	memory: MemoryInfo;
}

interface MemoryInfo {
	jsHeapSizeLimit: number;
	totalJSHeapSize: number;
	usedJSHeapSize: number;
}

interface GPUAdapterInfo {
	driver: string;
}

// Brave:

interface Brave {
	isBrave(): Promise<boolean>;
}

declare var Brave: {
	prototype: Brave;
}

interface Navigator {
	brave: Brave;
}

// Firefox:

interface CSSMozDocumentRule { }

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

// Experimental stuff so new/unofficial it's not even in a WICG respository...:

// Storage Pressure Event (https://github.com/jarryd999/storage-pressure-event):

interface StorageManagerEventMap {
	"quotachange": Event;
}

interface StorageManager extends EventTarget {
	onquotachange: ((this: StorageManager, ev: Event) => any) | null;
	addEventListener<K extends keyof StorageManagerEventMap>(type: K, listener: (this: StorageManager, ev: StorageManagerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof StorageManagerEventMap>(type: K, listener: (this: StorageManager, ev: StorageManagerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

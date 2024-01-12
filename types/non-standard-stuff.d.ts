
// Various non-standard features that are not part of any specification

// Chromium, Firefox & WebKit:

interface Screen {
	availLeft: number;
	availTop: number;
}

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
	type v8BreakIteratorType = (
		| "character"
		| "word"
		| "sentence"
		| "line"
	);

	type v8BreakIteratorBreakType = (
		| "none"
		| "number"
		| "letter"
		| "kana"
		| "ideo"
		| "unknown"
	);

	interface v8BreakIteratorOptions {
		type: Intl.v8BreakIteratorType;
	}

	interface Resolvedv8BreakIteratorOptions {
		locale: string;
		type: Intl.v8BreakIteratorType;
	}

	interface v8BreakIterator {
		first(): number;
		next(): number;
		current(): number;
		adoptText(text: string): void;
		breakType(): Intl.v8BreakIteratorBreakType;
		resolvedOptions(): Intl.Resolvedv8BreakIteratorOptions;
	}

	const v8BreakIterator: {
		new(locales?: string | string[], options?: Intl.v8BreakIteratorOptions): Intl.v8BreakIterator;
		supportedLocalesOf(locales: string | string[]): string[];
	};
}

interface Performance {
	readonly memory: MemoryInfo;
}

interface MemoryInfo {
	readonly jsHeapSizeLimit: number;
	readonly totalJSHeapSize: number;
	readonly usedJSHeapSize: number;
}

interface GPUAdapterInfo {
	readonly driver: string;
}

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

// Chromium & WebKit:

interface Element {
	scrollIntoViewIfNeeded(centerIfNeeded: boolean): void;
}

declare function webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
declare function webkitCancelAnimationFrame(handle: number): void;

// WebKit:

// https://github.com/WebKit/WebKit/tree/main/Source/WebCore/Modules/applepay
declare var ApplePayAutomaticReloadPaymentRequest: any;
declare var ApplePayCancelEvent: any;
declare var ApplePayContactField: any;
declare var ApplePayCouponCodeChangedEvent: any;
declare var ApplePayCouponCodeDetails: any;
declare var ApplePayCouponCodeUpdate: any;
declare var ApplePayDateComponents: any;
declare var ApplePayDateComponentsRange: any;
declare var ApplePayDeferredPaymentRequest: any;
declare var ApplePayDetailsUpdateBase: any;
declare var ApplePayError: any;
declare var ApplePayErrorCode: any;
declare var ApplePayErrorContactField: any;
declare var ApplePayFeature: any;
declare var ApplePayInstallmentConfiguration: any;
declare var ApplePayInstallmentItem: any;
declare var ApplePayInstallmentItemType: any;
declare var ApplePayInstallmentRetailChannel: any;
declare var ApplePayLaterAvailability: any;
declare var ApplePayLineItem: any;
declare var ApplePayMerchantCapability: any;
declare var ApplePayPayment: any;
declare var ApplePayPaymentAuthorizationResult: any;
declare var ApplePayPaymentAuthorizedEvent: any;
declare var ApplePayPaymentContact: any;
declare var ApplePayPaymentMethod: any;
declare var ApplePayPaymentMethodSelectedEvent: any;
declare var ApplePayPaymentMethodType: any;
declare var ApplePayPaymentMethodUpdate: any;
declare var ApplePayPaymentOrderDetails: any;
declare var ApplePayPaymentPass: any;
declare var ApplePayPaymentRequest: any;
declare var ApplePayPaymentTiming: any;
declare var ApplePayPaymentTokenContext: any;
declare var ApplePayRecurringPaymentDateUnit: any;
declare var ApplePayRecurringPaymentRequest: any;
declare var ApplePayRequestBase: any;
declare var ApplePaySession: any;
declare var ApplePaySessionError: any;
declare var ApplePaySetup: any;
declare var ApplePaySetupConfiguration: any;
declare var ApplePaySetupFeature: any;
declare var ApplePaySetupFeatureState: any;
declare var ApplePaySetupFeatureType: any;
declare var ApplePayShippingContactEditingMode: any;
declare var ApplePayShippingContactSelectedEvent: any;
declare var ApplePayShippingContactUpdate: any;
declare var ApplePayShippingMethod: any;
declare var ApplePayShippingMethodSelectedEvent: any;
declare var ApplePayShippingMethodUpdate: any;
declare var ApplePayValidateMerchantEvent: any;

interface Navigator {
	readonly standalone: boolean;
}

// Brave:

interface Brave {
	isBrave(): Promise<boolean>;
}

declare var Brave: {
	prototype: Brave;
};

interface Navigator {
	brave: Brave;
}

// Opera:

declare var g_opr: {
	scrap(): void;
};

declare var isOpera: boolean;

// Ulaa:

declare var ulaa: {
	getVersion(): string;
};

// Samsung Internet:

declare var News: {
	isHomepageNewsFeed(...args: any[]): any;
	setHomepageAsNewsFeed(...args: any[]): any;
};

declare var QuickAccess: {
	deleteItems(...args: any[]): any;
	enterEditMode(...args: any[]): any;
	enterPrivacyBoard(...args: any[]): any;
	getItems(...args: any[]): any;
	getPrivacyDashboardData(...args: any[]): any;
	isNightModeEnabled(...args: any[]): any;
	isPrivacyBoardEnabled(...args: any[]): any;
	isRefererCleanerEnabled(...args: any[]): any;
	isSecretMode(...args: any[]): any;
	isSetAsHomePage(...args: any[]): any;
	requestPrivacyDashbordData(...args: any[]): any;
	sendSILog(...args: any[]): any;
	showAddDialog(...args: any[]): any;
	showQuickAccessSettings(...args: any[]): any;
	showRenameDialog(...args: any[]): any;
	turnOnPrivacyFeature(...args: any[]): any;
};

// DuckDuckGo Android:

declare var AutoconsentAndroid: any;
declare var BlobConverter: any;
declare var BrowserAutofill: any;
declare var EmailInterface: any;
declare var LoginDetection: any;
declare var Print: any;

// DuckDuckGo Desktop:

declare function gc(): void;

interface Navigator {
	readonly duckduckgo: {
		isDuckDuckGo(): Promise<boolean>;
		readonly platform: string;
		readonly taintedOrigins: Set<any>;
		readonly taints: Set<any>;
	};
}

// Microsoft Edge:

interface SpeechSynthesis {
	preload(arg1: any, arg2: any[]): void;
}

interface HTMLVideoElement {
	readonly msVideoProcessing: string;
	msGetVideoProcessingTypes(): string[];
}

type MicrosoftHostEnvironmentValueName = (
	| "os-architecture"
	| "os-build"
	| "os-mode"
	| "os-sku"
);
	
interface External {
	// https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/mt795399(v=vs.85)
	getHostEnvironmentValue(name: MicrosoftHostEnvironmentValueName): string | null;
}

// Vivaldi:

interface DataTransfer {
	SetURLAndTitle(url: string, title: string): void;
}

// Firefox:

interface Navigator {
	taintEnabled(): boolean;
	readonly oscpu: string;
}

interface CSSMozDocumentRule { }

declare var CSSMozDocumentRule: {
	prototype: CSSMozDocumentRule;
};

declare function dump(message: string): void;

interface DeviceLightEventInit extends EventInit {
	value: number;
}

declare var DeviceLightEvent: {
	prototype: DeviceLightEvent;
	new(name: string, eventInitDict?: DeviceLightEventInit): DeviceLightEvent;
}

interface DeviceLightEvent extends Event {
	readonly value: number;
}

/** @deprecated */
declare var ondevicelight: ((this: Window, ev: DeviceLightEvent) => any) | null;

interface GlobalEventHandlersEventMap {
	"devicelight": DeviceLightEvent;
}

interface DataTransfer {
	addElement(element: Element): void;
}

// Servo:

declare var webdriverTimeout: any;
declare var webdriverCallback: any;

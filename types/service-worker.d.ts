
interface MessageEvent {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil) */
	waitUntil(f: Promise<any>): void;
}

interface ServiceWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
	"activate": ExtendableEvent;
	"fetch": FetchEvent;
	"install": ExtendableEvent;
	"message": MessageEvent;
	"messageerror": MessageEvent;
	"notificationclick": NotificationEvent;
	"notificationclose": NotificationEvent;
	"push": PushEvent;
	"pushsubscriptionchange": Event;
}

interface WindowEventMap extends ServiceWorkerGlobalScopeEventMap { }

type PushMessageDataInit = BufferSource | string;

/**
 * This Push API interface provides methods which let you retrieve the push data sent by a server in various formats.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData)
 */
interface PushMessageData {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/arrayBuffer) */
	arrayBuffer(): ArrayBuffer;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/blob) */
	blob(): Blob;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/json) */
	json(): any;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/text) */
	text(): string;
}

declare var PushMessageData: {
	prototype: PushMessageData;
	new(): PushMessageData;
};

interface PushEventInit extends ExtendableEventInit {
	data?: PushMessageDataInit;
}

/**
 * This Push API interface represents a push message that has been received. This event is sent to the global scope of a ServiceWorker. It contains the information sent from an application server to a PushSubscription.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushEvent)
 */
interface PushEvent extends ExtendableEvent {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushEvent/data) */
	readonly data: PushMessageData | null;
}

declare var PushEvent: {
	prototype: PushEvent;
	new(type: string, eventInitDict?: PushEventInit): PushEvent;
};

interface NotificationEventInit extends ExtendableEventInit {
	action?: string;
	notification: Notification;
}

/**
 * The parameter passed into the onnotificationclick handler, the NotificationEvent interface represents a notification click event that is dispatched on the ServiceWorkerGlobalScope of a ServiceWorker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent)
 */
interface NotificationEvent extends ExtendableEvent {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent/action) */
	readonly action: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent/notification) */
	readonly notification: Notification;
}

declare var NotificationEvent: {
	prototype: NotificationEvent;
	new(type: string, eventInitDict: NotificationEventInit): NotificationEvent;
};

interface ExtendableMessageEventInit extends ExtendableEventInit {
	data?: any;
	lastEventId?: string;
	origin?: string;
	ports?: MessagePort[];
	source?: Client | ServiceWorker | MessagePort | null;
}

/**
 * This ServiceWorker API interface represents the event object of a message event fired on a service worker (when a channel message is received on the ServiceWorkerGlobalScope from another context) — extends the lifetime of such events.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent)
 */
interface ExtendableMessageEvent extends ExtendableEvent {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/data) */
	readonly data: any;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/lastEventId) */
	readonly lastEventId: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/origin) */
	readonly origin: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/ports) */
	readonly ports: ReadonlyArray<MessagePort>;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/source) */
	readonly source: Client | ServiceWorker | MessagePort | null;
}

declare var ExtendableMessageEvent: {
	prototype: ExtendableMessageEvent;
	new(type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent;
};

interface FetchEventInit extends ExtendableEventInit {
	clientId?: string;
	handled?: Promise<undefined>;
	preloadResponse?: Promise<any>;
	replacesClientId?: string;
	request: Request;
	resultingClientId?: string;
}

/**
 * This is the event type for fetch events dispatched on the service worker global scope. It contains information about the fetch, including the request and how the receiver will treat the response. It provides the event.respondWith() method, which allows us to provide a response to this fetch.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent)
 */
interface FetchEvent extends ExtendableEvent {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/clientId) */
	readonly clientId: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/handled) */
	readonly handled: Promise<undefined>;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/preloadResponse) */
	readonly preloadResponse: Promise<any>;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/request) */
	readonly request: Request;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/resultingClientId) */
	readonly resultingClientId: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/respondWith) */
	respondWith(r: Response | PromiseLike<Response>): void;
}

declare var FetchEvent: {
	prototype: FetchEvent;
	new(type: string, eventInitDict: FetchEventInit): FetchEvent;
};

/**
 * This ServiceWorker API interface represents the global execution context of a service worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope)
 */
interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/clients) */
	readonly clients: Clients;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/activate_event) */
	onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) */
	onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/install_event) */
	oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/message_event) */
	onmessage: ((this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) */
	onmessageerror: ((this: ServiceWorkerGlobalScope, ev: MessageEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) */
	onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) */
	onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/push_event) */
	onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event) */
	onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: Event) => any) | null;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/registration) */
	readonly registration: ServiceWorkerRegistration;
	readonly serviceWorker: ServiceWorker;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) */
	skipWaiting(): Promise<void>;
	addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerGlobalScope: {
	prototype: ServiceWorkerGlobalScope;
	new(): ServiceWorkerGlobalScope;
};

/**
 * This ServiceWorker API interface represents the scope of a service worker client that is a document in a browser context, controlled by an active worker. The service worker client independently selects and uses a service worker for its own loading and sub-resources.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient)
 */
interface WindowClient extends Client {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/focused) */
	readonly focused: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/visibilityState) */
	readonly visibilityState: DocumentVisibilityState;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/focus) */
	focus(): Promise<WindowClient>;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/navigate) */
	navigate(url: string | URL): Promise<WindowClient | null>;
}

declare var WindowClient: {
	prototype: WindowClient;
	new(): WindowClient;
};

type FrameType = "auxiliary" | "nested" | "none" | "top-level";

/**
 * The Client interface represents an executable context such as a Worker, or a SharedWorker. Window clients are represented by the more-specific WindowClient. You can get Client/WindowClient objects from methods such as Clients.matchAll() and Clients.get().
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client)
 */
interface Client {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/frameType) */
	readonly frameType: FrameType;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/id) */
	readonly id: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/type) */
	readonly type: ClientTypes;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/url) */
	readonly url: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/postMessage) */
	postMessage(message: any, transfer: Transferable[]): void;
	postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare var Client: {
	prototype: Client;
	new(): Client;
};

/**
 * Provides access to Client objects. Access it via self.clients within a service worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients)
 */
interface Clients {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/claim) */
	claim(): Promise<void>;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/get) */
	get(id: string): Promise<Client | undefined>;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/matchAll) */
	matchAll<T extends ClientQueryOptions>(options?: T): Promise<ReadonlyArray<T["type"] extends "window" ? WindowClient : Client>>;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/openWindow) */
	openWindow(url: string | URL): Promise<WindowClient | null>;
}

declare var Clients: {
	prototype: Clients;
	new(): Clients;
};

declare var clients: Clients;
declare var onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
declare var onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => any) | null;
declare var oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
declare var onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
declare var onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
declare var onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => any) | null;
declare var onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: Event) => any) | null;
declare var registration: ServiceWorkerRegistration;
declare var serviceWorker: ServiceWorker;
declare function skipWaiting(): Promise<void>;

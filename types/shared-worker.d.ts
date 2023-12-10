
interface SharedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
	"connect": MessageEvent;
}

interface WindowEventMap extends SharedWorkerGlobalScopeEventMap { }

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope) */
interface SharedWorkerGlobalScope extends WorkerGlobalScope {
	/**
	 * Returns sharedWorkerGlobal's name, i.e. the value given to the SharedWorker constructor. Multiple SharedWorker objects can correspond to the same shared worker (and SharedWorkerGlobalScope), by reusing the same name.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/name)
	 */
	readonly name: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/connect_event) */
	onconnect: ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any) | null;
	/**
	 * Aborts sharedWorkerGlobal.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/close)
	 */
	close(): void;
	addEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SharedWorkerGlobalScope: {
	prototype: SharedWorkerGlobalScope;
	new(): SharedWorkerGlobalScope;
};

declare var onconnect: ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any) | null;
declare function close(): void;

interface WorkerGlobalScope {
	readonly name: string;
	onconnect: ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any) | null;
	close(): void;
	addEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

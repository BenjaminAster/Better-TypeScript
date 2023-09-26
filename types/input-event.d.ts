
interface HTMLElement {
	addEventListener(type: "input", listener: (this: HTMLElement, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: HTMLElement, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

interface HTMLTextAreaElement {
	addEventListener(type: "input", listener: (this: HTMLTextAreaElement, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: HTMLTextAreaElement, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

interface HTMLInputElement {
	addEventListener(type: "input", listener: (this: HTMLInputElement, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: HTMLInputElement, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

interface Document {
	addEventListener(type: "input", listener: (this: Document, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: Document, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

interface Window {
	addEventListener(type: "input", listener: (this: Window, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: Window, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

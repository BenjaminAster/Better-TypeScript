
interface HTMLElement {
	addEventListener(type: "input", listener: (this: HTMLElement, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: HTMLElement, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

interface MathMLElement {
	addEventListener(type: "input", listener: (this: MathMLElement, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: MathMLElement, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

interface SVGElement {
	addEventListener(type: "input", listener: (this: SVGElement, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: SVGElement, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

interface Document {
	addEventListener(type: "input", listener: (this: Document, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: Document, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

interface Window {
	addEventListener(type: "input", listener: (this: Window, ev: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
	removeEventListener(type: "input", listener: (this: Window, ev: InputEvent) => any, options?: boolean | EventListenerOptions): void;
}

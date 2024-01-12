
declare namespace BetterTypeScript {
	interface EventWithTargets<Target extends EventTarget, CurrentTarget extends EventTarget> extends Event {
		target: Target;
		currentTarget: CurrentTarget;
	}

	interface InputEventWithTargets<Target extends EventTarget, CurrentTarget extends EventTarget> extends InputEvent {
		target: Target;
		currentTarget: CurrentTarget;
	}
}

interface Element {
	addEventListener(type: "change", listener: (this: Element, ev: BetterTypeScript.EventWithTargets<HTMLInputElement & HTMLSelectElement & HTMLSelectListElement & HTMLTextAreaElement, Element>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: Element, ev: BetterTypeScript.InputEventWithTargets<HTMLInputElement & HTMLSelectElement & HTMLSelectListElement & HTMLTextAreaElement, Element>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLElement {
	addEventListener(type: "change", listener: (this: HTMLElement, ev: BetterTypeScript.EventWithTargets<HTMLInputElement & HTMLSelectElement & HTMLSelectListElement & HTMLTextAreaElement, HTMLElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLElement, ev: BetterTypeScript.InputEventWithTargets<HTMLInputElement & HTMLSelectElement & HTMLSelectListElement & HTMLTextAreaElement, HTMLElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLFieldSetElement {
	addEventListener(type: "change", listener: (this: HTMLFieldSetElement, ev: BetterTypeScript.EventWithTargets<HTMLInputElement & HTMLSelectElement & HTMLSelectListElement & HTMLTextAreaElement, HTMLFieldSetElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLFieldSetElement, ev: BetterTypeScript.InputEventWithTargets<HTMLInputElement & HTMLSelectElement & HTMLSelectListElement & HTMLTextAreaElement, HTMLFieldSetElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLInputElement {
	addEventListener(type: "change", listener: (this: HTMLInputElement, ev: BetterTypeScript.EventWithTargets<HTMLInputElement, HTMLInputElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLInputElement, ev: BetterTypeScript.InputEventWithTargets<HTMLInputElement, HTMLInputElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLSelectElement {
	addEventListener(type: "change", listener: (this: HTMLSelectElement, ev: BetterTypeScript.EventWithTargets<HTMLSelectElement, HTMLSelectElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLSelectElement, ev: BetterTypeScript.InputEventWithTargets<HTMLSelectElement, HTMLSelectElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLSelectListElement {
	addEventListener(type: "change", listener: (this: HTMLSelectListElement, ev: BetterTypeScript.EventWithTargets<HTMLSelectListElement, HTMLSelectListElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLSelectListElement, ev: BetterTypeScript.InputEventWithTargets<HTMLSelectListElement, HTMLSelectListElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTextAreaElement {
	addEventListener(type: "change", listener: (this: HTMLTextAreaElement, ev: BetterTypeScript.EventWithTargets<HTMLTextAreaElement, HTMLTextAreaElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLTextAreaElement, ev: BetterTypeScript.InputEventWithTargets<HTMLTextAreaElement, HTMLTextAreaElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

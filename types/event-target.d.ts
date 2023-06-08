
declare namespace BetterTypeScript {
	interface EventWithTargets<Target extends EventTarget, CurrentTarget extends EventTarget> extends Event {
		target: Target;
		currentTarget: CurrentTarget;
	}
}

interface HTMLFieldSetElement {
	addEventListener(type: "change", listener: (this: HTMLFieldSetElement, ev: BetterTypeScript.EventWithTargets<HTMLInputElement & HTMLSelectElement & HTMLSelectMenuElement & HTMLTextAreaElement, HTMLFieldSetElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLFieldSetElement, ev: BetterTypeScript.EventWithTargets<HTMLInputElement & HTMLSelectElement & HTMLSelectMenuElement & HTMLTextAreaElement, HTMLFieldSetElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLInputElement {
	addEventListener(type: "change", listener: (this: HTMLInputElement, ev: BetterTypeScript.EventWithTargets<HTMLInputElement, HTMLInputElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLInputElement, ev: BetterTypeScript.EventWithTargets<HTMLInputElement, HTMLInputElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLSelectElement {
	addEventListener(type: "change", listener: (this: HTMLSelectElement, ev: BetterTypeScript.EventWithTargets<HTMLSelectElement, HTMLSelectElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLSelectElement, ev: BetterTypeScript.EventWithTargets<HTMLSelectElement, HTMLSelectElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLSelectMenuElement {
	addEventListener(type: "change", listener: (this: HTMLSelectMenuElement, ev: BetterTypeScript.EventWithTargets<HTMLSelectMenuElement, HTMLSelectMenuElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLSelectMenuElement, ev: BetterTypeScript.EventWithTargets<HTMLSelectMenuElement, HTMLSelectMenuElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTextAreaElement {
	addEventListener(type: "change", listener: (this: HTMLTextAreaElement, ev: BetterTypeScript.EventWithTargets<HTMLTextAreaElement, HTMLTextAreaElement>) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: "input", listener: (this: HTMLTextAreaElement, ev: BetterTypeScript.EventWithTargets<HTMLTextAreaElement, HTMLTextAreaElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

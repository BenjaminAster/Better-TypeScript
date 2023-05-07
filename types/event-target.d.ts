
declare namespace BetterTypeScript {
	interface EventWithTargets<Target extends EventTarget, CurrentTarget extends EventTarget> extends Event {
		target: Target;
		currentTarget: CurrentTarget;
	}
}

interface HTMLFieldSetElement {
	addEventListener(type: "change", listener: (this: HTMLFieldSetElement, ev: BetterTypeScript.EventWithTargets<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement, HTMLFieldSetElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLInputElement {
	addEventListener(type: "change", listener: (this: HTMLInputElement, ev: BetterTypeScript.EventWithTargets<HTMLInputElement, HTMLInputElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLSelectElement {
	addEventListener(type: "change", listener: (this: HTMLSelectElement, ev: BetterTypeScript.EventWithTargets<HTMLSelectElement, HTMLSelectElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

interface HTMLTextAreaElement {
	addEventListener(type: "change", listener: (this: HTMLTextAreaElement, ev: BetterTypeScript.EventWithTargets<HTMLTextAreaElement, HTMLTextAreaElement>) => any, options?: boolean | AddEventListenerOptions): void;
}

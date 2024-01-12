
declare namespace BetterTypeScript {
	interface CustomElement extends HTMLElement {
		connectedCallback?: () => any;
		disconnectedCallback?: () => any;
		adoptedCallback?: (oldDocument: Document, newDocument: Document) => any;
		attributeChangedCallback?: (name: string, oldValue: string, newValue: string, namespace: string) => any;
		formAssociatedCallback?: (form: HTMLFormElement) => any;
		formDisabledCallback?: (disabled: boolean) => any;
		formResetCallback?: () => any;
		formStateRestoreCallback?: (newState: any, mode: string) => any;
	}
}

interface CustomElementConstructor {
	observedAttributes?: string[];
	disabledFeatures?: string[];
	formAssociated?: boolean;
	new(...params: any[]): BetterTypeScript.CustomElement;
}

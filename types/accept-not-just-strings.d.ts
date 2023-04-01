
interface CSSStyleDeclaration {
	setProperty(property: string, value: string | number | null, priority?: string): void;
}

interface URLSearchParams {
	append(name: string, value: string | number): void;
	set(name: string, value: string | number): void;
}

interface Element {
	setAttribute(qualifiedName: string, value: string | number | boolean): void;
}

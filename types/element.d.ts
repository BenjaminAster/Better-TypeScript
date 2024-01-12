
interface Element extends HTMLOrSVGElement, GlobalEventHandlers {
	readonly style: CSSStyleDeclaration;
	hidden: boolean;
}

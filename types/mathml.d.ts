

interface MathMLElementTagNameMap {
	"math": MathMLElement,
	"mi": MathMLElement,
	"mn": MathMLElement,
	"mo": MathMLElement,
	"mtext": MathMLElement,
	"mspace": MathMLElement,
	"ms": MathMLElement,
	"mrow": MathMLElement,
	"mfrac": MathMLElement,
	"msqrt": MathMLElement,
	"mroot": MathMLElement,
	"mstyle": MathMLElement,
	"merror": MathMLElement,
	"mpadded": MathMLElement,
	"mphantom": MathMLElement,
	"mfenced": MathMLElement,
	"menclose": MathMLElement,
	"msub": MathMLElement,
	"msup": MathMLElement,
	"msubsup": MathMLElement,
	"munder": MathMLElement,
	"mover": MathMLElement,
	"munderover": MathMLElement,
	"mmultiscripts": MathMLElement,
	"mtable": MathMLElement,
	"mlabeledtr": MathMLElement,
	"mtr": MathMLElement,
	"mtd": MathMLElement,
	"maligngroup": MathMLElement,
	"mstack": MathMLElement,
	"mlongdiv": MathMLElement,
	"msgroup": MathMLElement,
	"msrow": MathMLElement,
	"mscarries": MathMLElement,
	"mscarry": MathMLElement,
	"msline": MathMLElement,
	"maction": MathMLElement,
}

interface Document extends Node, DocumentAndElementEventHandlers, DocumentOrShadowRoot, FontFaceSource, GlobalEventHandlers, NonElementParentNode, ParentNode, XPathEvaluatorBase {
	createElementNS<K extends keyof MathMLElementTagNameMap>(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: K): MathMLElementTagNameMap[K];
	createElementNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: string): MathMLElement;
	getElementsByTagNameNS<K extends keyof MathMLElementTagNameMap>(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
	getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>;
}

interface Element extends Node, ARIAMixin, Animatable, ChildNode, InnerHTML, NonDocumentTypeChildNode, ParentNode, Slottable {
	getElementsByTagNameNS<K extends keyof MathMLElementTagNameMap>(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
	getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>;
}


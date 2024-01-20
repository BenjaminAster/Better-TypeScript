
// / <reference path="./index.d.ts" />

// document.body.style.setProperty("--test", 2);

// // document.body.textContent = 3;

// const a = document.querySelector("sdfks > input[type=range].test#hi[no]:hover")
// const b = document.querySelector("svg#logo > filter:first-of-child feTurbulence:not([type=fractalNoise])")

// / <reference no-default-lib="true" />
// / <reference lib="ESNext" />
// / <reference lib="WebWorker" />
// / <reference lib="WebWorker.Iterable" />

/// <reference path="./index.d.ts" />
// / <reference path="./worker.d.ts" />

// onfetch

history.pushState({})

const ownKeys = (object: any) => {
	const descriptors = Object.getOwnPropertyDescriptors(object);
	for (const key of Reflect.ownKeys(descriptors)) {
		console.log(key, descriptors[key])
	}
}

self.addEventListener("fetch", (event) => {

});

customElements.define("a-b", class extends HTMLElement {
	constructor() {
		super()
	};
	static formAssociated = true
	asdkfasdf = "a"
	static disabledFeatures = ["internals"]
	connectedCallback() {
		return 5
	};
	adoptedCallback() {

	}
});

self.onconnect

self.addEventListener("connect", e => {

})

const asdfa = () => 5;
asdfa.apply

const c = document.querySelector.apply(document, "canvas")

self.name

document.execCommand("bold");

let s = document.getSelection();
s.extend

document.body.addEventListener("input", function (event) {
	event.inputType
	this
})

document.addEventListener("input", event => { })

const input = document.createElement("input");
input.type = "text";
input.addEventListener("input", ({ target }) => {
	target.value;
})


// self.addEventListener("fetch", (event) => {

// });

const $ = document.querySelector.bind(document);

const dialog = $("dialog[open]");

const asdfkjdf = Document.prototype.querySelector.call(document, "body.a");
const asdfkjdf2 = document.querySelector("body.a");

const a: Tuple<number, 3> = [3, 4, 5];

const element1 = document.querySelector("alskdfj a");
element1.querySelectorAll(":scope > li:nth-of-type(odd)")

window.SpeechRecognitionResult

const element = document.querySelector(".foo");

if (element.matches("img")) {
	element.src = "https://bigrat.monster/media/bigrat.png";
} else if (element.matches("dialog[open]")) {
	element.showModal();
} else if (element.matches("body > a#main-link[href]")) {
	element.href = "https://youtube.be/dQw4w9WgXcQ";
} else if (element.matches<HTMLTextAreaElement>(".inputfield")) {
	element.value = "Hello world!";
}

//////////////

declare const noice: Element;

if (noice.matches("a")) {
	noice;

	if (noice.matches("[href]")) {
		noice;
	} else {
		noice.href = "";
	}
} else {
	noice;
}

if (noice.matches("a[disabled]")) {
	noice;
} else {
	noice;
}


const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ATTRIBUTE);

walker.nextNode();
walker.root;


const walker2 = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker2.nextNode()) {
	const currentNode = walker2.currentNode // `currentNode` now has type `Text`
}

document.body.textContent

const asdg = JSON.parse("sldkfjsldaf")

const parseFromString = DOMParser.prototype.parseFromString.bind(new DOMParser());
const parseHTML = Range.prototype.createContextualFragment.bind(new Range());

declare const test: HTMLAnchorElement;

if (test.matches("div")) {
	test
} else {
	test
}

const template = document.querySelector("template#my-element-template");

customElements.define("my-element", class extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.append(template.content.cloneNode(true));

		this.shadowRoot.addEventListener("pointerdown", (event) => {
			console.log(event.pointerType); // `event` has type `PointerEvent`
		});
	}
});


type HypertextNode = string | [string, { [key: string]: any }, ...HypertextNode[]];

const hypertextNode: HypertextNode =
	["div", { id: "parent" },
		["div", { id: "first-child" }, "I'm the first child"],
		["div", { id: "second-child" }, "I'm the second child"]
	];


const { module, instance } = await WebAssembly.instantiateStreaming(await fetch("./test.wasm"));

document.documentElement.addEventListener("drop", (event) => {
	const items = event.dataTransfer.items;
	const [item] = items;
})

var custom = {};

var formatter = {
	header: function (x) {
		if (x === custom) {
			return ["span", { "style": "background-color: #fcc" }, "Hello!"] as const;
		} else {
			return null;
		}
	},
	hasBody: function (x) {
		return x === custom;
	},
	body: function (x) {
		var selfRef = ["object", { "object": custom }] as const;
		return ["ol", {}, ["li", {}, "world!"], ["li", {}, selfRef]] as const;
	}
};

window.devtoolsFormatters = [formatter];


let recursion = {};
window.devtoolsFormatters = [{
	header: (object) => object === recursion ? ["span", { style: "border: 1px solid #888" }, "Hello!"] : null,
	hasBody: Boolean,
	body: (object) => ["ol", {}, ["li", {}, "world!"], ["li", {}, ["object", { object }]]],
}];
console.log(recursion);




const sgdjh = instance.exports.abc(3, 6, 7);
const sgdjht = instance.exports.myGlobal.value;
const sgdjsdfht = instance.exports.myMemory.buffer;
const sgasdfdjht = instance.exports.myTable.set;

document.caretRangeFromPoint
document.caretPositionFromPoint

document.elementFromPoint
document.elementsFromPoint
document.scrollingElement

CaretPosition

new DOMParser().parseFromString("asdf", "application/xhtml+xml");
new DOMParser().parseFromString("asdf", "application/xml");
new DOMParser().parseFromString("asdf", "image/svg+xml");
new DOMParser().parseFromString("asdf", "text/html");
new DOMParser().parseFromString("asdf", "text/xml");

const test20 = document.querySelector("q.c[a]:p.c[a]");
const test21 = document.querySelector("q[a]#i#i:p.c");
const test22 = document.querySelector("q#i.c[a][a]");
const test23 = document.querySelector("q:p#i:p#i");
const test24 = document.querySelector("q");
const test25 = document.querySelector("q.c");
const test26 = document.querySelector("q.c#i");
const test27 = document.querySelector("q#i.c");
const test28 = document.querySelector("math#i.c");
const test29 = document.querySelector("munderover.c#i");

const test1 = document.querySelector("html body > div ~ a * + portal.basdf.asdfasdf:has(b)");
const test2 = document.querySelector("b:hover");
const test3 = document.querySelector("ul[class^=a].b");
const test4 = document.querySelector("div#no");
const test5 = document.querySelector("input.basdf.asdfasdf");
const test6 = document.querySelector("canvas.basdf.asdfasdf");
const test7 = document.querySelector("body.basdf.asdfasdf");
const test8 = document.querySelector("x.b:hover");
const test9 = document.querySelector(":scope > input[type=radio][name=test].aa:nth-of-type(even)");

const test10 = document.querySelector(":scope > .foo [viewBox] foreignObject[xmlns] munderover.sum .fraction [href] .foo[displaystyle]");
const test11 = document.querySelector(":scope > .foo [viewBox] foreignObject[xmlns] .fraction");
const test12 = document.querySelector(":scope > .foo [vviewBox] .ffvoreignObject[xmlns] .fraction");
const test13 = document.querySelector(":scope > .foo");
const test14 = document.querySelector(".bar");
const test15 = document.querySelector(".bar .baz");
const test16 = document.querySelector("filter .noise");
document.querySelector(":scope > #logo-svg msubsup")
document.querySelector("math .fraction") // MathMLElement
document.querySelector("filter > .noise") // SVGElement
document.querySelector(":scope > #logo-svg foreignObject msubsup .power") // MathMLElement

const test30 = document.querySelector("a.askdjf.lsdjf")
const test31 = document.querySelector("portal:hover")
const test32 = document.querySelector("a.b:hover")
const test33 = document.querySelector("html body > div ~ a * + portal.basdf.asdfasdf:has(b)")
const test34 = document.querySelector("body a")
const test35 = document.querySelector("a .test")
const test36 = document.querySelector("input[type=range] ~ .text")
const test37 = document.querySelector("input[type=range] .text")
const test38 = document.querySelector("input .text")
const test39 = document.querySelector("b .test")

document.querySelector(".parameter-chooser > label > input[type=radio][name=parameter] ~ .text");

let kasdf: BetterTypeScript.SelectorContainsSVGOrMathMLElement<"a math svg munderover.a img[src]">;
let kasdfsdf: BetterTypeScript.GetElementTypeFromSimpleSelector<".bar">;
let kasdfsdsdf: BetterTypeScript.SelectorContainsSVGOrMathMLElement<".bar .baz">;

let alskdfl: BetterTypeScript.SelectorStringContainingElementName = "alsdjfl.a a.b laksdfj";

type asdf = BetterTypeScript.SelectorContainsSVGOrMathMLElement<"span .test", BetterTypeScript.ElementNamespace.SVG>
type asd3f = BetterTypeScript.SelectorContainsSVGOrMathMLElement<"span .test">
type asdfdfds = BetterTypeScript.GetElementTypeFromSimpleSelector<"span">
type asdfdfdssdf = HTMLSpanElement extends MathMLElement ? 1 : 0;
type asdfdfdssdfsd = HTMLInputElement extends MathMLElement ? 1 : 0;
type asdfdfdssdf4 = MathMLElement extends HTMLSpanElement ? 1 : 0;
type asdfdfdssdf4sdf = MathMLElement["constructor"]["name"];


const string = Object.prototype.toString.apply({})

// OffscreenCanvas

// const element = document.querySelector("b");
// // const element = document.querySelector("a");

// if (element instanceof HTMLAnchorElement) {
// 	element.href
// } else if (element instanceof HTMLInputElement) {
// 	element.value
// }

// if (element.matches("a")) {
// 	element.href;
// }

// // const _self = self as unknown as ServiceWorkerGlobalScope;

// window.addEventListener("pointermove", (event) => {
// 	document.documentElement.style.setProperty("--mouse-x", event.clientX);
// 	document.documentElement.style.setProperty("--mouse-y", event.clientY);
// });


// const anchorTemplate = document.createElement("a");
// anchorTemplate.href = "https://example.com";
// anchorTemplate.textContent = "example";
// const anchorClone = anchorTemplate.cloneNode(true);

// importScripts("s")
// document

// const fragment = document.querySelector<HTMLTemplateElement>("template#foo-template").content;

// for (let i = 0; i < 10; i++) {
// 	const clone = fragment.cloneNode(true); // `clone` now has the type `DocumentFragment` instead of just `Node`
// 	clone.querySelector("a.destination").href = "https://example.com";
// 	document.body.append(clone);
// }

// const c = new OffscreenCanvas(1, 1);

// const ctx = c.getContext("2d", { alpha: true });


export { };

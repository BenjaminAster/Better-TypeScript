
# Better TypeScript

This repository contains various TypeScript type definitions to make working with TypeScript more convenient.

This project goes along with [TypeScript types for new JavaScript](https://github.com/BenjaminAster/TypeScript-types-for-new-JavaScript), which contains TypeScript type definitions for new JavaScript stuff that isn't in TypeScript's standard type definitions. Better TypeScript depends on [TypeScript types for new JavaScript](https://github.com/BenjaminAster/TypeScript-types-for-new-JavaScript), so it is automatically included if you use Better TypeScript.

---

NPM: [better-typescript](https://www.npmjs.com/package/better-typescript)

GitHub: [BenjaminAster/Better-TypeScript](https://github.com/BenjaminAster/Better-TypeScript)

---

Install using npm:

```shell
npm i -D better-typescript@latest
```

Reference the type definitions directly in your TypeScript/JavaScript files...

```javascript
/// <reference types="better-typescript" />
```

...or include them in your `tsconfig.json` or `jsconfig.json`:

```jsonc
{
	"compilerOptions": {
		"types": ["better-typescript"],
	},
}
```

For [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) (including [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)), use `better-typescript/worker` as the path. If you use a `tsconfig.json` or `jsconfig.json` configuration file, you have to exclude the worker files there with the `"exclude"` option so that the DOM lib doesn't get included by default. If your worker is a JavaScript and not TypeScript file, you then have to manually re-enable type checking for the file via `// @ts-check`. Also don't forget to exclude the DOM lib with `no-default-lib="true"`. The start of your worker file should look like this:

```javascript
// @ts-check
/// <reference no-default-lib="true" />
/// <reference types="better-typescript/worker" />
```

For [worklets](https://developer.mozilla.org/en-US/docs/Web/API/Worklet), use `better-typescript/worklet/<WORKLET_NAME>` as the path:
 - `better-typescript/worklet/audio` for [audio worklets](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet)
 - `better-typescript/worklet/paint` for [paint worklets](https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet)
 - `better-typescript/worklet/layout` for [layout worklets](https://github.com/w3c/css-houdini-drafts/blob/main/css-layout-api/EXPLAINER.md)
 - `better-typescript/worklet/animation` for [animation worklets](https://github.com/w3c/css-houdini-drafts/blob/main/css-animation-worklet-1/README.md)
```javascript
/// <reference types="better-typescript/worklet/audio" />
```
```javascript
/// <reference types="better-typescript/worklet/paint" />
```
```javascript
/// <reference types="better-typescript/worklet/layout" />
```
```javascript
/// <reference types="better-typescript/worklet/animation" />
```

## Stuff in this repository

### `.querySelector()` element parser

A querySelector parser that parses the CSS selector and automatically returns the interface for the respective element:

```typescript
document.querySelector("a#foo.bar") // HTMLAnchorElement
document.querySelector("form.info input[type=radio][name=test]:nth-of-type(even)") // HTMLInputElement
document.querySelector(".math-output mrow ~ munderover[displaystyle=false]") // MathMLElement
document.querySelector("svg#logo > filter:first-of-type feTurbulence:not([type=fractalNoise])") // SVGFETurbulenceElement
element.querySelectorAll(":scope > li:nth-of-type(odd)") // NodeListOf<HTMLLIElement>
```

If the element type itself cannot be determined, but the element is a descendant of any SVG or MathML element, the element automacially becomes an `SVGElement` or `MathMLElement`, respectively:

```typescript
document.querySelector("math.formula .fraction") // MathMLElement
document.querySelector("filter#displacement-filter > .noise") // SVGElement
document.querySelector("body > #logo-svg foreignObject[height] msubsup .power") // MathMLElement
```

Just to be clear: This parser is _not_ written in TypeScript, it's written solely in _TypeScript type definitions_ (files ending in `.d.ts`). This works similarly to [HypeScript](https://github.com/ronami/HypeScript).

### `.matches()`

You can now use `element.matches(selector)` and Better TypeScript will automatically detect the element and provide you with its type definitions when using it in an if-statement:

```typescript
const element = document.querySelector(".foo");

if (element.matches("img")) {
	// `element` has type `HTMLImageElement` in this scope
	element.src = "https://bigrat.monster/media/bigrat.png";
} else if (element.matches("dialog[open]")) {
	// `element` has type `HTMLDialogElement` in this scope
	element.showModal();
} else if (element.matches("body > a#main-link[href]")) {
	// `element` has type `HTMLAnchorElement` in this scope
	element.href = "https://youtube.be/dQw4w9WgXcQ";
} else if (element.matches<HTMLTextAreaElement>(".inputfield")) {
	// `element` has type `HTMLTextAreaElement` in this scope
	element.value = "Hello world!";
}
```

### Service workers

Working with service workers with type checking enabled is an awful experience by default as in TypeScript, there is no `ServiceWorker` lib, only a `WebWorker` one. Stuff like `self.registration`, `self.clients` or the `fetch` event aren't available by default because from TypeScript's perspecitve, `self` alywas has the type `WorkerGlobalScope` in workers, not `ServiceWorkerGlobalScope`. The way you could previously get around this is by declaring a variable `const _self = self as unknown as ServiceWorkerGlobalScope;` and then working with this `_self` instead of `self` as the global object. This is very ugly and hacky, so Better TypeScript simply provides all service worker related stuff out of the box to any web worker with the `better-typescript/worker` types.

```typescript
/// <reference no-default-lib="true" />
/// <reference types="better-typescript/worker" />

self.addEventListener("fetch", (event) => {
	// `event` has type `FetchEvent`
})
```

### Shared workers

The same as for service workers also applies to [shared workers](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker). You can now use all shared worker related things out of the box.

```typescript
/// <reference no-default-lib="true" />
/// <reference types="better-typescript/worker" />

self.addEventListener("connect", (event) => {
	// `event` has type `MessageEvent`
})
```

### Tuple

This adds the `Tuple` type to create fixed length arrays:

```typescript
// 💩 previos method:
const color: [number, number, number, number] = [255, 0, 0, 255];

// 😎 with Better Typescript:
const color: Tuple<number, 4> = [255, 0, 0, 255];
```

### Accept not just strings

Many JavaScript functions also accept numbers which then get automatically converted into a string. TypeScript often _just_ accepts strings, so Better TypeScript adds the ability to call a function with numbers instead of strings.

```typescript
window.addEventListener("pointermove", (event) => {
	document.documentElement.style.setProperty("--mouse-x", event.clientX); // would be an error without Better TypeScript
	document.documentElement.style.setProperty("--mouse-y", event.clientY);
});
```

```typescript
const searchParams = new URLSearchParams(location.search);
searchParams.set("count", ++count); // would be an error without Better TypeScript
history.replaceState(null, "", "?" + searchParams.toString());
```

### `.cloneNode()`

When calling `.cloneNode()` on any element or fragment, TypeScript just returns the `Node` type by default which is not very useful. With Better TypeScript, `.cloneNode()` returns the type of the element that it is called on.

```typescript
const anchorTemplate = document.createElement("a");
anchorTemplate.href = "https://example.com";
anchorTemplate.textContent = "example";
const anchorClone = anchorTemplate.cloneNode(true); // `anchorClone` now has the type `HTMLAnchorElement` instead of just `Node`
```

```typescript
const fragment = document.querySelector("template#foo-template").content;

for (let i = 0; i < 10; i++) {
	const clone = fragment.cloneNode(true); // `clone` now has the type `DocumentFragment` instead of just `Node`
	clone.querySelector("a.destination").href = "https://example.com";
	document.body.append(clone);
}
```

### MathML

> **Note**
> This has been included in TypeScript version 5.0 by default and will be removed once it is out of beta (March 14)

This adds support for [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) element names as well as the MathML namespace for the `document.createElementNS()` and `document.getElementsByTagNameNS` functions.

```typescript
document.querySelector("math"); // now returns type `MathMLElement` instead of `Element`
document.querySelector("mfrac"); // now returns type `MathMLElement` instead of `Element`
document.createElementNS("http://www.w3.org/1998/Math/MathML", "msub"); // now returns type `MathMLElement` instead of `Element`
```

### OffscreenCanvas

When getting a specific canvas context (e.g. `"2d"`, `"webgl2"`, ...) from a normal canvas element, TypeScript automatically detects the context type and returns the respective type in the `.getContext()` method.

```typescript
const canvas = document.querySelector("canvas");
canvas.getContext("2d", { alpha: false }); // returns type `CanvasRenderingContext2D` & the options parameter is of type `CanvasRenderingContext2DSettings`
```

However, when using an `OffscreenCanvas`, TypeScript does not provide you with these type definitions and always just returns the `OffscreenCanvasRenderingContext` type which is not very useful. Better TypeScript adds the canvas context types and their option interfaces.

```typescript
const canvas = new OffscreenCanvas(width, height);
canvas.getContext("2d", { alpha: false }); // now correctly returns type `CanvasRenderingContext2D` & the options parameter is of type `OffscreenCanvasRenderingContext2DSettings`
```

### Non-standard stuff

This includes various non-standard features that are not part of any specification, e.g. Brave's [`navigator.brave.isBrave()`](https://github.com/brave/brave-browser/issues/8216#issuecomment-590184398), Firefox' `CSSMozDocumentRule` or Chromium & WebKit's [`scrollIntoViewIfNeeded()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded) function. This can also be used for spoofing-resistant browser detection.

```typescript
const isBrave = await navigator.brave?.isBrave?.();
```

```typescript
if (Element.prototype.scrollIntoViewIfNeeded) element.scrollIntoViewIfNeeded(true);
else element.scrollIntoView({ block: "center" });
```

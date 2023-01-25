
# Better TypeScript

This repository contains various TypeScript type definitions to make working with TypeScript more convenient.

This project goes along with [TypeScript types for new JavaScript](https://github.com/BenjaminAster/TypeScript-types-for-new-JavaScript), which contains TypeScript type definitions for new JavaScript stuff that isn't in TypeScript's standard type definitions. Better TypeScript depends on [TypeScript types for new JavaScript](https://github.com/BenjaminAster/TypeScript-types-for-new-JavaScript), so it is automatically included if you use Better TypeScript.

---

NPM: [better-ts](https://www.npmjs.com/package/better-ts)

GitHub: [BenjaminAster/Better-TypeScript](https://github.com/BenjaminAster/Better-TypeScript)

---

Install using npm:
```shell
npm i -D better-ts@latest
```
Reference the type definitions directly in your TypeScript/JavaScript files...
```javascript
/// <reference types="better-ts" />
```
...or include them in your `tsconfig.json` or `jsconfig.json`:
```jsonc
{
	"compilerOptions": {
		"types": ["better-ts"],
	},
}
```
Inside of a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), use `better-ts/worker` as the path:
```javascript
/// <reference no-default-lib="true" />
/// <reference types="better-ts/worker" />
```

## Stuff in this repository

### querySelector element parser

A querySelector parser that parses the CSS selector and automatically returns the interface for the respective element:

```typescript
document.querySelector("a#foo.bar") // HTMLAnchorElement
element.querySelector("form.info > input[type=radio][name=test]:nth-of-type(even)") // HTMLInputElement
document.querySelector(".math-output mrow ~ munderover[displaystyle=false]") // MathMLElement
document.querySelector("svg#logo > filter:first-of-child feTurbulence:not([type=fractalNoise])") // SVGFETurbulenceElement
```

Just to be clear: This parser is _not_ written in TypeScript, it's written solely in _TypeScript type definitions_ (files ending in `.d.ts`). This works similar to [HypeScript](https://github.com/ronami/HypeScript).

### Service workers

Working with service workers with type checking enabled is an awful experience by default as in TypeScript, there is no `ServiceWorker` lib, only a `WebWorker` one. Stuff like `self.registration`, `self.clients` or the `fetch` event aren't available by default because from TypeScript's perspecitve, `self` alywas has the type `WorkerGlobalScope` in workers, not `ServiceWorkerGlobalScope`. The way you could previously get around this is by declaring a variable `const _self = self as unknown as ServiceWorkerGlobalScope;` and then working with this `_self` instead of `self` as the global object. This is very ugly and hacky, so Better TypeScript simply provides all service worker related stuff out of the box to any web worker with the `better-ts/worker` types.

```typescript
/// <reference no-default-lib="true" />
/// <reference types="better-ts/worker" />

self.addEventListener("fetch", (event) => {
	// `event` is of type `FetchEvent`
})
```

### Accept not just strings

Many JavaScript functions also accept numbers which then get automatically converted into a string. TypeScript often _just_ accepts strings, so Better TypeScript adds the ability to call a function with numbers instead of strings.

```typescript
window.addEventListener("pointermove", (event) => {
	document.documentElement.style.setProperty("--mouse-x", event.clientX); // would be an error without Better TypeScript
	document.documentElement.style.setProperty("--mouse-y", event.clientY);
)};
```

```typescript
const searchParams = new URLSearchParams(location.search);
searchParams.set("count", ++count); // would be an error without Better TypeScript
history.replaceState(null, "", "?" + searchParams.toString());
```

### cloneNode

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

This includes various non-standard features that are not part of any specification, e.g. Chromium's `chrome`, Brave's `navigator.brave.isBrave()` or Firefox' `CSSMozDocumentRule`. This can also be used for spoofing-resistant browser detection.

```typescript
const isBrave = await navigator.brave?.isBrave?.();
```

```typescript
// Chromium & WebKit's non-standard scrollIntoViewIfNeeded() function
if (Element.prototype.scrollIntoViewIfNeeded) element.scrollIntoViewIfNeeded(true);
else element.scrollIntoView({ block: "center" });
```

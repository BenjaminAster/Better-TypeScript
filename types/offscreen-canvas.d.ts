
interface OffscreenCanvasRenderingContext2DSettings {
	alpha?: boolean;
	colorSpace?: PredefinedColorSpace;
	desynchronized?: boolean;
	willReadFrequently?: boolean;
}

interface OffscreenImageBitmapRenderingContextSettings {
	alpha?: boolean;
}

interface OffscreenWebGLContextAttributes {
	alpha?: boolean;
	antialias?: boolean;
	depth?: boolean;
	desynchronized?: boolean;
	failIfMajorPerformanceCaveat?: boolean;
	powerPreference?: WebGLPowerPreference;
	premultipliedAlpha?: boolean;
	preserveDrawingBuffer?: boolean;
	stencil?: boolean;
}

interface OffscreenCanvas extends EventTarget {
	/** Set the third parameter (`_set_to_undefined`) to `undefined` so that TypeScript recognizes that you are using the Better-TypeScript version of it */
	getContext(contextId: "2d", options?: OffscreenCanvasRenderingContext2DSettings, _set_to_undefined?: undefined): OffscreenCanvasRenderingContext2D | null;
	/** Set the third parameter (`_set_to_undefined`) to `undefined` so that TypeScript recognizes that you are using the Better-TypeScript version of it */
	getContext(contextId: "bitmaprenderer", options?: OffscreenImageBitmapRenderingContextSettings, _set_to_undefined?: undefined): ImageBitmapRenderingContext | null;
	/** Set the third parameter (`_set_to_undefined`) to `undefined` so that TypeScript recognizes that you are using the Better-TypeScript version of it */
	getContext(contextId: "webgl", options?: OffscreenWebGLContextAttributes, _set_to_undefined?: undefined): WebGLRenderingContext | null;
	/** Set the third parameter (`_set_to_undefined`) to `undefined` so that TypeScript recognizes that you are using the Better-TypeScript version of it */
	getContext(contextId: "webgl2", options?: OffscreenWebGLContextAttributes, _set_to_undefined?: undefined): WebGL2RenderingContext | null;
}

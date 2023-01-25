
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
	getContext(contextId: "2d", options?: OffscreenCanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D | null;
	getContext(contextId: "bitmaprenderer", options?: OffscreenImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
	getContext(contextId: "webgl", options?: OffscreenWebGLContextAttributes): WebGLRenderingContext | null;
	getContext(contextId: "webgl2", options?: OffscreenWebGLContextAttributes): WebGL2RenderingContext | null;
}


declare namespace BetterTypeScript {
	namespace WebAssembly {
		interface Instance {
			readonly exports: BetterTypeScript.WebAssembly.Exports;
		}

		interface WebAssemblyInstantiatedSource {
			instance: BetterTypeScript.WebAssembly.Instance;
			module: globalThis.WebAssembly.Module;
		}

		interface ExportValue {
			// Function:
			(...args: number[]): number;

			// WebAssembly.Global:
			value: any;
			valueOf(): any;

			// WebAssembly.Memory:
			readonly buffer: ArrayBuffer;
			grow(delta: number): number;

			// WebAssembly.Table:
			readonly length: number;
			get(index: number): any;
			grow(delta: number, value?: any): number;
			set(index: number, value?: any): void;
		}

		type Exports = Record<string, BetterTypeScript.WebAssembly.ExportValue>;
	}
}

declare namespace WebAssembly {
	function instantiate(bytes: BufferSource, importObject?: Imports): Promise<BetterTypeScript.WebAssembly.WebAssemblyInstantiatedSource>;
	function instantiate(moduleObject: Module, importObject?: Imports): Promise<BetterTypeScript.WebAssembly.Instance>;
	function instantiateStreaming(source: Response | PromiseLike<Response>, importObject?: Imports): Promise<BetterTypeScript.WebAssembly.WebAssemblyInstantiatedSource>;
}

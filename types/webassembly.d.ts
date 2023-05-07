
declare namespace BetterTypeScript {
	namespace WebAssembly {
		interface Instance {
			readonly exports: BetterTypeScript.WebAssembly.Exports;
		}

		interface WebAssemblyInstantiatedSource {
			instance: BetterTypeScript.WebAssembly.Instance;
			module: globalThis.WebAssembly.Module;
		}

		type ExportValue = (
			& ((...args: any[]) => any)
			& globalThis.WebAssembly.Global
			& globalThis.WebAssembly.Memory
			& globalThis.WebAssembly.Table
		);

		type Exports = Record<string, BetterTypeScript.WebAssembly.ExportValue>;
	}
}

declare namespace WebAssembly {
	function instantiate(bytes: BufferSource, importObject?: Imports): Promise<BetterTypeScript.WebAssembly.WebAssemblyInstantiatedSource>;
	function instantiate(moduleObject: Module, importObject?: Imports): Promise<BetterTypeScript.WebAssembly.Instance>;
	function instantiateStreaming(source: Response | PromiseLike<Response>, importObject?: Imports): Promise<BetterTypeScript.WebAssembly.WebAssemblyInstantiatedSource>;
}

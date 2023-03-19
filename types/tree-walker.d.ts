
declare namespace BetterTypeScript {
	type NodeFilter<T extends BetterTypeScript.NodeFilterMap[keyof BetterTypeScript.NodeFilterMap]> = ((node: T) => number) | { acceptNode(node: T): number; }

	interface TreeWalker<T extends BetterTypeScript.NodeFilterMap[keyof BetterTypeScript.NodeFilterMap], R extends Node> {
		currentNode: T;
		readonly filter: globalThis.NodeFilter | null;
		readonly root: R;
		readonly whatToShow: number;
		firstChild(): T | null;
		lastChild(): T | null;
		nextNode(): T | null;
		nextSibling(): T | null;
		parentNode(): T | null;
		previousNode(): T | null;
		previousSibling(): T | null;
	}

	interface NodeFilterMap {
		[NodeFilter.SHOW_ELEMENT]: Element;
		[NodeFilter.SHOW_TEXT]: Text;
		[NodeFilter.SHOW_COMMENT]: Comment;
	}
}

interface Document {
	createTreeWalker<F extends keyof BetterTypeScript.NodeFilterMap, R extends Node>(root: R, whatToShow: F, filter?: BetterTypeScript.NodeFilter<BetterTypeScript.NodeFilterMap[F]>): BetterTypeScript.TreeWalker<BetterTypeScript.NodeFilterMap[F], R>;
}

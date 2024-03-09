
declare namespace BetterTypeScript {
	interface AbstractRange {
		readonly collapsed: boolean;
		readonly endContainer: Text;
		readonly endOffset: number;
		readonly startContainer: Text;
		readonly startOffset: number;
	}

	interface StaticRange extends BetterTypeScript.AbstractRange {
	}
}

interface InputEvent extends UIEvent {
	getTargetRanges(): BetterTypeScript.StaticRange[];
}

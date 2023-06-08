
declare namespace BetterTypeScript {
	interface PerformanceEntryTypeMap {
		"element": PerformanceElementTiming;
		"event": PerformanceEventTiming;
		"first-input": PerformanceEventTiming;
		"largest-contentful-paint": LargestContentfulPaint;
		"layout-shift": LayoutShift;
		"longtask": PerformanceLongTaskTiming;
		"mark": PerformanceMark;
		"measure": PerformanceMeasure;
		"navigation": PerformanceNavigationTiming;
		"paint": PerformancePaintTiming;
		"resource": PerformanceResourceTiming;
		"taskattribution": TaskAttributionTiming;
	}
}

interface Performance {
	getEntriesByType<K extends keyof BetterTypeScript.PerformanceEntryTypeMap>(type: K): BetterTypeScript.PerformanceEntryTypeMap[K][];
}

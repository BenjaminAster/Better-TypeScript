
interface ObjectConstructor {
	getOwnPropertyDescriptors<T>(o: T): { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & { [x: string | symbol]: PropertyDescriptor; };
}

interface Array<T> {
	includes(searchElement: any, fromIndex?: number): boolean;
}

interface Function {
	apply<T, R>(this: (this: T) => R, thisArg: T): R;
	apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;
	call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;
	bind<T, A extends any[], B extends any[], R>(this: (this: T, ...args: [...A, ...B]) => R, thisArg: T, ...args: A): (...args: B) => R;
	bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
}

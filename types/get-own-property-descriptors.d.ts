
interface ObjectConstructor {
	getOwnPropertyDescriptors<T>(o: T): { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & { [x: string | symbol]: PropertyDescriptor; };
}


//building type Constructor
type Constructor<T> = new (...args: any[]) => T;

export function MaxHeapMyxin<T extends Constructor<{}>>(Base: T = class {} as any) {
    return class extends Base {
        fixUndefined_myxin(value, indexVotes) {
            //value is bucket of candidate
            if (value === undefined) {
                return null;
            } else {
                return value[indexVotes]; //return number of votes of bucket
            }
        }
    };
}
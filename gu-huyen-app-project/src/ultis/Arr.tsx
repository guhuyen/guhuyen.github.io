


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SplitArr = (arr: any, size: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = arr.reduce((acc: any, _curr: any, i: any) => {
        if (!(i % size)) {
            acc.push(arr.slice(i, i + size));
        }
        return acc;
    }, []);
    return res;
}
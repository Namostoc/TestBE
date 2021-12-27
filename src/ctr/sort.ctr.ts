class Sort implements ISortCtr {
    public async SortArray(body: any): Promise<IReturnResponse> {
        if (!body.number) {
            return {
                data: "number is empty"
            }
        }
        const sortarray = body.number.sort(function (a, b) { return a - b })
        console.log('sortarray ======= ', sortarray);
        const max = sortarray.slice(sortarray.length - 3)
        const min = sortarray.slice(0, 3)
        return {
            data: {
                "max": max,
                "min": min
            }
        }
    }

}

export default Sort
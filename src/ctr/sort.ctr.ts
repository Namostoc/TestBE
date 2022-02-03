class Sort  {
    public async SortArray(body: any): Promise<any> {
        if(!body.number){
            return {
                data: "require number"
            }
        }

        if (body.number.length === 0) {
            return {
                data: "number is empty"
            }
        }
        const sortarray = body.number.sort(function (a:any, b:any) { return a - b })
        console.log('sortarray ======= ', sortarray);
        const max: number[] = sortarray.slice(sortarray.length - 3)
        console.log('max ======' , max);
        
        const min: number[] = sortarray.slice(0, 3)
        console.log('min ======', min);
        
        return {
            data: {
                "max": max,
                "min": min
            }
        }
    }

}

export default Sort
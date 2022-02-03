import { log } from "console"
import { isFunctionDeclaration } from "typescript"

class LessNum {
    public async lessnum(body: any): Promise<any> {
        const inputNumber: Number[] = body.number

        if (!inputNumber) {
            return {
                data: 'require body'
            }
        }

        if (!Array.isArray(inputNumber)) {
            return {
                data: 'data is not type array'
            }
        }

        if (inputNumber.length === 0) {
            return {
                data: 'No data in array'
            }
        }
        let Sort = inputNumber.sort(function (a: any, b: any) { return b - a })
        console.log('sort==== ', Sort);

        let putarray = []
        let string = ''
        for(let j = 0; j < Sort.length ; j++){
            if(Sort[j] != putarray[putarray.length - 1]){
                putarray.push(Sort[j])
            }
        }
        console.log('putarray =====', putarray);
        

        for (let i = 0; i < putarray.length; i++) {
            let count = 0
            for (let k = i; k < putarray.length; k++) {
                if (putarray[i] > putarray[k]) {
                    count++
                    console.log('unique ========', putarray[k]);
                    console.log('count ====', count);
                    
                }
            }
            string += `{${putarray[i]}:${count}}`
        }
        




        return {
            data: [string]
        }


    }
}


export default LessNum
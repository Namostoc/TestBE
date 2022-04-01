class BracketCheck {
    public async bracketCheck(body: any): Promise<any> {
        const input: string = body.bracket

        if (!input) {
            return {
                data: "Require bracket data"
            }
        }

        if (typeof input !== 'string') {
            return {
                data: "Bracket data need to be only string"
            }
        }

        if (!input.length) {
            return {
                data: "Bracket Data is empty"
            }
        }

        let leftArr = []
        let open = 0
        let close = 0

        for (let i = 0; i < input.length; i++) {
            let last = leftArr[leftArr.length - 1]
            if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
                leftArr.push(input[i])
                open++

            } else if (last === '(' && input[i] === ')'
                || last === '{' && input[i] === '}'
                || last === '[' && input[i] === ']') {
                leftArr.pop()
                close++
            } else if(input[i] === ')' || input[i] === '}' || input[i] === ']' ){
                return {
                    data: 0
                }
            }

            console.log('last ===', last);




        }

        console.log('open ===', open);
        console.log('close ===', close);
        console.log('left ===', leftArr);


        if (open < close || open > close) {
            return {
                data: 0
            }
        }








        return {
            data: 1
        }
    }
}

export default BracketCheck
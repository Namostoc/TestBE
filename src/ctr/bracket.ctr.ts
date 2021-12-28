class Bracket {
    public async bracket(body: any): Promise<any> {
        const bracket: string = body.bracket
        if (!body.bracket.length) {
            return { data: "bracket is empty" }
        }


        let stack: string[] = []
        let Open = 0
        let Close = 0
        let count = 0
        for (let i = 0; i < bracket.length; i++) {
            const last = stack[stack.length - 1]
            if (bracket[i] === '(') {
                stack.push(bracket[i])
                Open++
            }
            if (bracket[i] === ')') {
                stack.push(bracket[i])
                Close++
            }

            console.log('open====', Open);
            console.log('Close =====', Close);          


            if (bracket[i] === ')' && Open < Close ) {
                return {
                    data: 0
                }
            }

    
            console.log('stack ========', stack);
            const join = stack.join('')
            console.log('join =======', join);

            if (bracket === join) {
                return {
                    data: 1
                }
            }

        }

    }

}

export default Bracket
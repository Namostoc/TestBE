class Bracket {
    public async bracket(body: any): Promise<any> {
        const bracket = body.bracket
        if (!body.bracket.length) {
            return { data: "bracket is empty" }
        }
        let stack: string[] = []
        for (let i = 0; i < bracket.length; i++) {
            const last = stack[stack.length - 1]
            if (bracket[i] === '(' ) {
                stack.push(bracket[i])
            } else if (bracket[bracket.length - 1] === ')') {
                stack.push(bracket[bracket.length - 1])
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
        return {
            data: 0
        }
    }

}

export default Bracket
class Bracket implements IBracket{
    public async bracket(body: any): Promise<IReturnResponse> {

        if(!body.bracket){
            return {data: "bracket is empty"}
        }
        const correctbracket = ['()', '(())', '[]', '[[]]', '{}', '{{}}', '{()}']
        for (let i = 0; i <= correctbracket.length; i++) {
            if (body.bracket === correctbracket[i]) {
                return {
                    data: 1
                }
            }
        }
        return {
            data: 2
        }
    }

}

export default Bracket
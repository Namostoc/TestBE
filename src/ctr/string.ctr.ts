class stringLetter implements IString{
    public async stringletter(body: any): Promise<IReturnResponse> {
        const inputstr = body.message


        if(!inputstr){
            return {
                data: "require message"
            }
        }

        if(!body.word){
            return {
                data: "require word"
            }
        }
        for (let i = 0 ; i <= inputstr.length ; i++){
            const concat = inputstr.substr(i,body.word.length)
            console.log(concat);
            
            if(body.word === concat){
                return {data: 1}
            }
        }
        return {data: 0}
    }
}


export default stringLetter
class stringLetter  {
    public async stringletter(body: any): Promise<any> {
        const inputstr: string = body.message


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
        if(typeof inputstr !== 'string' ){
            return {
                data: "Message need to be string"
            }
        }else if(typeof body.word !== 'string'){
            return{
                data: "Word need to be string"
            }
        }
        console.log(typeof inputstr !== 'string' );
        
        for (let i = 0 ; i <= inputstr.length ; i++){
            const concat: string = inputstr.substr(i,body.word.length)
            console.log(concat);
            
            if(body.word === concat){
                return {data: 1}
            }
        }
        return {data: 0}
    }
}


export default stringLetter
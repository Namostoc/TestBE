declare interface IBracket{
    bracket(body:any): Promise<IReturnResponse>
    bracketCheck(body:any): Promise<IReturnResponse>
}
declare interface IBracket{
    bracketCheck(body:any): Promise<IReturnResponse>
}
declare interface IReturnResponse {
    data: object | null | string | number
}
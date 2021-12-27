import { Request, Response, Router } from 'express';
import StringLetter from '../ctr/string.ctr'

declare interface IStringCtr{
    stringletter(body:any): Promise<IReturnResponse>
}
declare interface IReturnResponse {
    data: object | null | string | number
}

const router = Router()

router.post('/' , async (req: Request, res: Response) =>{
    const stringCtr: IStringCtr = new StringLetter()
    const stringletter: IReturnResponse = await stringCtr.stringletter(req.body)
    res.status(200).json(stringletter)
})



export default router
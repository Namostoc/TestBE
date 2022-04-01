import { Request, Response, Router } from 'express';
import BracketCheck from '../ctr/bracketcheck.ctr'

declare interface IBracket{
    bracketCheck(body:any): Promise<IReturnResponse>
}
declare interface IReturnResponse {
    data: object | null | string | number
}

const router = Router()




router.post('/', async (req: Request, res: Response) => {
    const bracketCheckCtr:IBracket = new BracketCheck()
    const bracketCheck:IReturnResponse = await bracketCheckCtr.bracketCheck(req.body)
    res.status(200).json(bracketCheck)
})


export default router
import { Request, Response, Router } from 'express';
import { async } from 'rxjs';
import Bracket from '../ctr/bracket.ctr'



declare interface IBracket{
    bracket(body:any): Promise<IReturnResponse>
}
declare interface IReturnResponse {
    data: object | null | string | number
}

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const bracketCtr:IBracket = new Bracket()
    const bracket:IReturnResponse = await  bracketCtr.bracket(req.body)
    res.status(200).json(bracket)
})



export default router
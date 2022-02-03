import { Request, Response, Router } from 'express';
import LessNum from '../ctr/lessNum.ctr';


declare interface IReturnResponse {
    data: object | null | string | number
}

declare interface ILessNum{
    lessnum(body: any): Promise<IReturnResponse>
}

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const lessNumCtr:ILessNum = new LessNum()
    const lessNum:IReturnResponse = await  lessNumCtr.lessnum(req.body)
    res.status(200).json(lessNum)
})

export default router
import { Request, Response, Router } from 'express';
import Tree from '../ctr/tree.ctr'

declare interface ITree{
    maketree(body:any): Promise<IReturnResponse>
}
declare interface IReturnResponse {
    data: object | null | string | number
}

const router = Router()

router.post('/' , async (req: Request, res: Response) =>{
    const treeCtr: ITree = new Tree()
    const Maketree: IReturnResponse = await treeCtr.maketree(req.body)
    res.status(200).json(Maketree)
})

export default router

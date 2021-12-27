import { Request, Response, Router } from 'express';
import Sort from '../ctr/sort.ctr'


declare interface ISortCtr{
    SortArray(body:any): Promise<IReturnResponse>
}
declare interface IReturnResponse {
    data: object | null | string | number
}

const router = Router()

router.post('/' , async (req: Request, res: Response) => {
    const sortCtr: ISortCtr = new Sort()
    const sortArray: any = await sortCtr.SortArray(req.body)
    console.log(sortArray)
    res.status(200).json(sortArray)
})


export default router
import { Request, Response, Router } from 'express';
import Sortctr from '../ctr/sort.ctr'

const router = Router()

router.post('/' , async (req: Request, res: Response) => {
    const sortCtr: any = new Sortctr()
    const sortArray: any = await sortCtr.SortArray(req.body)
    console.log(sortArray)
    res.status(200).json(sortArray)
})


export default router
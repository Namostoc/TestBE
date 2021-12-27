import { Request, Response, Router } from 'express';
import BracketCtr from '../ctr/bracket.ctr'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const bracketCtr:any = new BracketCtr()
    const bracket:any = await  bracketCtr.bracket(req.body)
    res.status(200).json(bracket)
})

export default router
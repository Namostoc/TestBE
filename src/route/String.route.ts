import { Request, Response, Router } from 'express';
import StringLetter from '../ctr/string.ctr'



const router = Router()

router.post('/' , async (req: Request, res: Response) =>{
    const stringCtr: any = new StringLetter()
    const stringletter: any = await stringCtr.stringletter(req.body)
    res.status(200).json(stringletter)
})



export default router
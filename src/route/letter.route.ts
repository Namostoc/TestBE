import { Request, Response, Router } from 'express';
import Letters from '../ctr/letter.ctr'

declare interface ILetters{
    letters(body:any): Promise<IReturnResponse>
}
declare interface IReturnResponse {
    data: object | null | string | number
}



const router = Router()

router.get('/', async(req:Request, res: Response) => {
    const lettersCtr: ILetters = new Letters()
    const letter:IReturnResponse = await lettersCtr.letters(req.body)
    res.status(200).json(letter)
} )

export default router
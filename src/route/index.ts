import { Router, Request, Response, NextFunction } from "express";



const router = Router();
router.get('/', async (req: Request, res: Response) => {
    res.status(200).json({Hello : "World"})
})




export default router;
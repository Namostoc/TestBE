import { Router, Request, Response, NextFunction } from "express";
import Sortroute from './sortArray.route' 
import Stringroute from './String.route'
import Bracketroute from "./bracket.route";
import LessNum from "./Lessnum.route"
const router = Router();



router.use("/sort", Sortroute)
router.use("/string", Stringroute)
router.use("/bracket", Bracketroute)
router.use("/lessnum", LessNum)

export default router;
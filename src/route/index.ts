import { Router, Request, Response, NextFunction } from "express";
import Sortroute from './sortArray.route' 
import Stringroute from './String.route'
import Bracketroute from "./bracket.route";

const router = Router();



router.use("/sort", Sortroute)
router.use("/string", Stringroute)
router.use("/bracket", Bracketroute)

export default router;
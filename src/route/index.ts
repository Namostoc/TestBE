import { Router, Request, Response, NextFunction } from "express";
import Sortroute from './sortArray.route' 
import Stringroute from './String.route'
import Bracketroute from "./bracket.route";
import LessNum from "./Lessnum.route"
import MakeTree from "./tree.route"
import BracketCheckroute from "./bracketCheck.route"
import Letters from "./letter.route"
const router = Router();



router.use("/sort", Sortroute)
router.use("/string", Stringroute)
router.use("/bracket", Bracketroute)
router.use("/lessnum", LessNum)
router.use("/maketree", MakeTree)
router.use("/bracketcheck", BracketCheckroute)
router.use("/letters", Letters)
export default router;
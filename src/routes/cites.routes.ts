import { Router } from 'express'
import { getAllCites } from '../contollers/cites.controllers'
const route = Router()

route.get('/', getAllCites)

export default route

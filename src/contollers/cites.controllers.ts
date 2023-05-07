import { Request, Response } from 'express'
import { getCites } from '../services/cites.services';

const getAllCites = async (_req: Request, res: Response) => {
    const cites = await getCites()
    res.status(200).json(cites)
}

export { getAllCites }

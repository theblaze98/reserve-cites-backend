import CitesInterface from '../interfaces/CitesInterface'
import Cites from '../models/Cites'

const getCites = async (): Promise<CitesInterface[]> => {
    const cites = await Cites.find()
    return cites
}

export { getCites }

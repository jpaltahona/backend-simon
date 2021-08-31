import { getDataUser } from './service';

export const getDataUserInfo = async (req, res) => {
   try {
        const dataResponse = await getDataUser(req.body);
        res.json(dataResponse)
   } catch (error) {
        res.status(400).json({ error: error })
   }
}

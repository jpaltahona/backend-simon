import { loginSimon } from './service';

export const login = async (req, res) => {
   try {
        const dataResponse = await loginSimon(req.body);
        res.json(dataResponse)
   } catch (error) {
    res.status(400).json({ error: error })
   }
}

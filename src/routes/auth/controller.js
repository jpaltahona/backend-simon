import { loginSimon } from './service';

export const login = async (req, res) => {
   try {
        const dataResponse = await loginSimon(req.body);
        console.log(dataResponse)
        res.json(dataResponse)
   } catch (error) {
    res.status(400).json({ error: error })
   }
}

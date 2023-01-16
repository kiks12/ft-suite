
import { user } from '../../../../prisma/controllers/user';
import { NextApiRequest, NextApiResponse } from "next";

interface CreateAccountBody {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
}

const createAccount = async (body: CreateAccountBody) => {
  try {
    return await user.create(body);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const newAccount = await createAccount(JSON.parse(req.body));
      res.status(200);
      res.json(newAccount);
    }
  } catch (error) {
    console.error(error); 
    res.status(500);
  }
}
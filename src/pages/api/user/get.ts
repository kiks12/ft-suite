
import { user } from '../../../../prisma/controllers/user';

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.email) {
      const requestedUser = await user.getOne(req.query.email as string);
      res.status(200);
      res.setHeader('set-cookie', `accessToken=${requestedUser?.email}; path=/; samesite=lax; httponly;`);
      return res.json({
        user: requestedUser,
      })
    }
  } catch (e) {
    console.error(e);
    res.status(500);
  }
}
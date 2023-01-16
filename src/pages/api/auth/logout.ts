
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.setHeader('set-cookie', `accessToken=deleted; Max-Age=0; path=/`);
    res.status(200);
    res.json({
      success: "Successfully logged out",
    })
  } catch (e) {
    console.error(e);
    res.status(500);
  }
}
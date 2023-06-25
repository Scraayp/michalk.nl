// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import { createReadStream } from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = join(process.cwd(), "public", "cv.pdf");
  const stat = createReadStream(filePath);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=cv.pdf");
  stat.pipe(res);
  
}

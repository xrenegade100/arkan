import {promises as fs} from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/posts.json', 'utf8');
    const posts  = JSON.parse(fileContents);
    const report = req.body;
    posts.posts.push(report);
    await fs.writeFile(jsonDirectory + "/posts.json", JSON.stringify(posts));
    res.status(200).json(posts);
}

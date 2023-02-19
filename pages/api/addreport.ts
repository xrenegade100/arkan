import {promises as fs} from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Post } from '../../types';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/posts.json', 'utf8');
    const posts  = JSON.parse(fileContents) as Post[];
    const report = req.body;
    console.log(report)
    res.status(200).json(posts);
}

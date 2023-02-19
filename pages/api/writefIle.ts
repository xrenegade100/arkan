import {promises as fs} from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const jsonDirectory = path.join(process.cwd(), 'data');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/posts.json', 'utf8');
    console.log(jsonDirectory + '/posts.json');
    res.status(200).json(fileContents);
}

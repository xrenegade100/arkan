import type { NextApiRequest, NextApiResponse } from 'next';
// eslint-disable-next-line import/no-unresolved
import { DarkPatternsInfo } from '../../../types';
import info from '../../../public/data/darkpatterns.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<DarkPatternsInfo>) {
  res.status(200).json(info as DarkPatternsInfo);
}

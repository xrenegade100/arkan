import type { NextApiRequest, NextApiResponse } from 'next';
import { DarkPatternsInfo } from '../../../types';
import info from '../../../public/data/darkpatterns.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DarkPatternsInfo>
) {
  res.status(200).json(info as DarkPatternsInfo);
}
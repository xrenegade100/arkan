// eslint-disable-next-line import/no-extraneous-dependencies
import {
  isTrickQuestion,
  getSentencesFromHtmlPage,
} from '@xrenegade100/trick-question-detection';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'Missing URL' });
  }

  const toAnalyze = await getSentencesFromHtmlPage(url as string);
  if (toAnalyze.length === 0) {
    return res.status(200).json({});
  }
  const results: { [key: string]: number } = {};
  toAnalyze.forEach((sentence) => {
    try {
      results[sentence] = isTrickQuestion(sentence);
    } catch (e) {
      // ignore
    }
  });
  return res.status(200).json(results);
}

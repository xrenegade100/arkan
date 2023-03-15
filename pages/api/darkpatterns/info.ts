// eslint-disable-next-line import/no-unresolved, import/extensions
import { DarkPatternsInfo } from '../../../types';
import info from '../../../public/data/darkpatterns.json';

export default function handler() {
  return info as DarkPatternsInfo;
}

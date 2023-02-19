import { atom } from 'recoil';
import { Image } from '../types/index';

const pdfList = atom({
  key: 'pdfList',
  default: [] as File[],
});

export default pdfList;
import { atom } from 'recoil';
import { Image } from '../types/index';

const imageList = atom({
  key: 'pdfList',
  default: [] as File[],
});

export default imageList;
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { FirebaseError } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  getDocs,
  query,
  QuerySnapshot,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useState } from 'react';
import { firestore } from '../firebase.config';
import { AnalysisDarkPattern, Phrase } from '../types';

const AnalysisDAO = () => {
  const analysisDarkPatternsCollection = collection(firestore, 'analysis-dp');

  const [dbError, setDbError] = useState<string>();

  const addAnalysis = async (
    siteLink: string,
    darkPatternType: string,
    dangerLevel: string,
    userId: string,
    date: string,
    isShared: boolean,
    phrases: Phrase[],
  ): Promise<DocumentReference<DocumentData> | null> => {
    try {
      const analysis = await addDoc(analysisDarkPatternsCollection, {
        'danger-level': dangerLevel,
        'detected-dp-name': darkPatternType,
        'site-link': siteLink,
        'site-name': new URL(siteLink).hostname,
        'user-id': userId || '',
        'is-shared': isShared,
        date,
        phrases,
      });

      return analysis;
    } catch (error) {
      setDbError((error as FirebaseError).code);
    }

    return null;
  };

  const getAnalysisById = async (
    id: string,
  ): Promise<AnalysisDarkPattern | null> => {
    let report: DocumentSnapshot<DocumentData> | null = null;

    const ref = doc(firestore, 'analysis-dp', id);

    try {
      report = await getDoc(ref);
    } catch (error) {
      setDbError((error as FirebaseError).code);
    }
    if (report) {
      return {
        ...report?.data(),
        id: report.id,
      } as AnalysisDarkPattern;
    }

    return null;
  };

  const shareAnalysisPost = async (id: string): Promise<boolean> => {
    try {
      const report = doc(firestore, 'analysis-dp', id);
      await updateDoc(report, { 'is-shared': true });
    } catch (error) {
      setDbError((error as FirebaseError).code);
      return false;
    }

    return true;
  };

  const getAnalysisByUserId = async (
    userId: string,
  ): Promise<AnalysisDarkPattern[] | null> => {
    let reports: QuerySnapshot<DocumentData> | null = null;

    if (userId) {
      const reportsQuery = query(
        collection(firestore, 'analysis-dp'),
        where('user-id', '==', userId),
      );

      try {
        reports = await getDocs(reportsQuery);
      } catch (error) {
        setDbError((error as FirebaseError).code);
      }

      return reports?.docs.map((report) => ({
        ...report.data(),
        id: report.id,
      })) as AnalysisDarkPattern[];
    }

    return null;
  };

  return {
    addAnalysis,
    getAnalysisById,
    shareAnalysisPost,
    getAnalysisByUserId,
    dbError,
  };
};

export default AnalysisDAO;

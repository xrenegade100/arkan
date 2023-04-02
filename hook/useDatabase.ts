/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { FirebaseError } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QuerySnapshot,
  startAt,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useState } from 'react';
import { firestore } from '../firebase.config';
import {
  AnalysisDarkPattern,
  DarkPatternType,
  DetectedDarkPattern,
  Phrase,
} from '../types';
import useStorage from './useStorage';

const useDatabase = () => {
  const detectedDarkPatternsCollection = collection(
    firestore,
    'user-detected-dp',
  );

  const analysisDarkPatternsCollection = collection(firestore, 'analysis-dp');

  const { uploadImage, deleteImage } = useStorage();

  const [dbError, setDbError] = useState<string>();

  /*
   * methods for report post
   */
  const addReport = async (
    siteName: string,
    siteLink: string,
    description: string,
    darkPatternType: string,
    dangerLevel: string,
    image: File,
    userId: string,
    date: string,
  ): Promise<DocumentReference<DocumentData> | null> => {
    try {
      const url = await uploadImage(image, userId);

      const report = await addDoc(detectedDarkPatternsCollection, {
        'danger-level': dangerLevel,
        description,
        'detected-dp-name': darkPatternType,
        'dp-image-url': url,
        'dp-image-name': image.name,
        'site-link': siteLink,
        'site-name': siteName,
        'user-id': userId,
        date,
      });

      return report;
    } catch (error) {
      setDbError((error as FirebaseError).code);
    }

    return null;
  };

  const deleteReport = async (
    id: string,
    userId: string,
    imageName: string,
  ): Promise<boolean> => {
    try {
      deleteImage(imageName, userId);
      const report = doc(firestore, 'user-detected-dp', id);
      await deleteDoc(report);
    } catch (error) {
      setDbError((error as FirebaseError).code);
      return false;
    }

    return true;
  };

  const getReportsByUserId = async (
    userId: string,
  ): Promise<DetectedDarkPattern[] | null> => {
    let reports: QuerySnapshot<DocumentData> | null = null;

    if (userId) {
      const reportsQuery = query(
        collection(firestore, 'user-detected-dp'),
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
      })) as DetectedDarkPattern[];
    }

    return null;
  };

  const getReportsByDpType = async (
    dpName: DarkPatternType,
  ): Promise<DetectedDarkPattern[] | null> => {
    let reports: QuerySnapshot<DocumentData> | null = null;

    const reportsQuery = query(
      collection(firestore, 'user-detected-dp'),
      where('detected-dp-name', '==', dpName),
    );

    try {
      reports = await getDocs(reportsQuery);
    } catch (error) {
      setDbError((error as FirebaseError).code);
    }
    if (reports) {
      return reports?.docs.map((report) => ({
        ...report.data(),
        id: report.id,
      })) as DetectedDarkPattern[];
    }

    return null;
  };

  const getReportById = async (
    id: string,
  ): Promise<DetectedDarkPattern | null> => {
    let report: DocumentSnapshot<DocumentData> | null = null;

    const ref = doc(firestore, 'user-detected-dp', id);

    try {
      report = await getDoc(ref);
    } catch (error) {
      setDbError((error as FirebaseError).code);
    }
    if (report) {
      return {
        ...report?.data(),
        id: report.id,
      } as DetectedDarkPattern;
    }

    return null;
  };

  const getReportsIfIsSaved = async (): Promise<
    DetectedDarkPattern[] | null
  > => {
    let reports: QuerySnapshot<DocumentData> | null = null;

    const reportsQuery = query(
      collection(firestore, 'user-detected-dp'),
      where('saved', '==', true),
    );

    try {
      reports = await getDocs(reportsQuery);
    } catch (error) {
      setDbError((error as FirebaseError).code);
    }
    if (reports) {
      return reports?.docs.map((report) => ({
        ...report.data(),
        id: report.id,
      })) as DetectedDarkPattern[];
    }

    return null;
  };

  const saveReportPost = async (id: string): Promise<boolean> => {
    try {
      const report = doc(firestore, 'user-detected-dp', id);
      await updateDoc(report, { saved: true });
    } catch (error) {
      setDbError((error as FirebaseError).code);
      return false;
    }

    return true;
  };

  const getAllReportsWithPagination = async (
    orderField: string,
    startPoint: string,
    limitNumber: number,
  ): Promise<DetectedDarkPattern[] | null> => {
    let reports: QuerySnapshot<DocumentData> | null = null;

    const repostsQuery = query(
      detectedDarkPatternsCollection,
      orderBy(orderField, 'desc'),
      startAt(startPoint),
      limit(limitNumber),
    );

    try {
      reports = await getDocs(repostsQuery);
    } catch (error) {
      setDbError((error as FirebaseError).code);
    }

    if (reports) {
      return reports.docs.map((report) => ({
        ...report.data(),
        id: report.id,
      })) as DetectedDarkPattern[];
    }

    return null;
  };

  /**
   * methods for analysis post
   */
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

  /**
   * methods for user
   */

  return {
    addReport,
    addAnalysis,
    getAnalysisById,
    getReportsByUserId,
    getAllReportsWithPagination,
    getReportsIfIsSaved,
    getReportsByDpType,
    getReportById,
    deleteReport,
    saveReportPost,
    shareAnalysisPost,
    getAnalysisByUserId,
    dbError,
  };
};

export default useDatabase;

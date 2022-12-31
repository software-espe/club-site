import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { serviceConfig } from '../../../service.config';

if (!getApps().length) {
  initializeApp({
    credential: cert({
      clientEmail: serviceConfig.client_email,
      privateKey: serviceConfig.private_key?.replace(/\\n/g, '\n'),
      projectId: serviceConfig.project_id
    })
  });
}

const firestore = getFirestore();
const auth = getAuth();

export { firestore, auth };

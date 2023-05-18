import dotenv from 'dotenv';
import { initializeApp } from 'firebase-admin/app';
import mainScreen from './screens/main.js';

dotenv.config();

if (process.env.MODE === 'development') {
  console.log('Running in development mode');
}

const app = initializeApp();

console.log(`App initialized: ${app.name}`);

await mainScreen();

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAt82_kkr9pORfKuxO4QTJoM0SvDYX-sL0',
    authDomain: 'refactorai.firebaseapp.com',
    projectId: 'refactorai',
    storageBucket: 'refactorai.appspot.com',
    messagingSenderId: '428120026653',
    appId: '1:428120026653:web:42120039208a891d1420f4',
    measurementId: 'G-9Y6GLPBRXB',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore();
const firebaseAuth = getAuth(firebaseApp);
const functions = getFunctions(firebaseApp);
const helloWorld = httpsCallable(functions, 'helloWorld');
const document = doc(firestore, 'testCollection/WP0VRboOK0zANiYmvvAu');
setDoc(document, {
    name: 'Danial Hasan',
    job: 'Software Engineer',
    age: 19,
});
// console.log('document: ', document);

export { firestore, firebaseAuth, helloWorld };

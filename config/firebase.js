// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBE-ranLfmiNvXbFLsAzM-ONWBg2rw5ei0',
	authDomain: 'ind-record.firebaseapp.com',
	projectId: 'ind-record',
	storageBucket: 'ind-record.appspot.com',
	messagingSenderId: '317492924256',
	appId: '1:317492924256:web:9120b9478a17f921191805',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// create .env and hide ur config

const firebaseConfig = {
    apiKey: "AIzaSyCF3fX4_ehTv2kue9o3Bp4flBcEY7Z_3Js",
    authDomain: "financial-market-news-bl-f63e6.firebaseapp.com",
    projectId: "financial-market-news-bl-f63e6",
    storageBucket: "financial-market-news-bl-f63e6.appspot.com",
    messagingSenderId: "695510062193",
    appId: "1:695510062193:web:13e909a9086749c1d8f7d0",
    measurementId: "G-P2KERW9KHZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
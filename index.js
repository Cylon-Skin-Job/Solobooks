// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwFXZzvNx8YbmrC0BOeWt2Mo9Q6Rg2iMc",
    authDomain: "solobooks-f27a6.firebaseapp.com",
    databaseURL: "https://solobooks-f27a6-default-rtdb.firebaseio.com",
    projectId: "solobooks-f27a6",
    storageBucket: "solobooks-f27a6.appspot.com",
    messagingSenderId: "847552712920",
    appId: "1:847552712920:web:5d3b68aabb8f0afc5e07ad"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeUserData(invoiceNumber, company, date, location) {
  

const database = getDatabase();
const reference = ref(database, 'invoices/' + invoiceNumber);

set(reference, {
    companyName: company,
    invoiceDate: date,
    customerAddress: location
});
}

writeUserData(11111, "SCS", "10/20/23", "131 Crowley Lake");

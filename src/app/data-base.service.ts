import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})

export class DataBaseService {

  constructor() {}

  firebase = {
    apiKey: "AIzaSyCpEcfJXs2LKxwaL_u4d0utvQHH3oSA0fw",
    authDomain: "biosensorbox-c9334.firebaseapp.com",
    projectId: "biosensorbox-c9334",
    storageBucket: "biosensorbox-c9334.appspot.com",
    messagingSenderId: "743762268982",
    appId: "1:743762268982:web:1b378374039f1248181997"
  };
  

  app = initializeApp(this.firebase)
  db = getFirestore(this.app)
  getData() {
    let promise = new Promise(async (resolve, reject) =>{
      const mainCol = collection(this.db, '<Date>')  //Actual Data
      // const mainCol = collection(this.db, "Debug_Date") //Collection used for debugging 
      const dataSnapshot = await getDocs(mainCol)
      const sensorData = dataSnapshot.docs.map(doc => doc.data())
      console.log("Read")
      resolve(sensorData)
    })
    return promise
  }

}

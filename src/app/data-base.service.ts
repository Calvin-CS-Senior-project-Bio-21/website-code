import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreDocument, DocumentSnapshot} from '@angular/fire/compat/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { Observable } from 'rxjs';
import { dataPoint, Item } from './DataPoint';


@Injectable({
  providedIn: 'root'
})

export class DataBaseService {
  // data$: Observable<dataPoint[]>;
  data$: AngularFirestoreDocument<dataPoint>;
 
  constructor(private afs: AngularFirestore) {
    const my_collection = afs.collection<dataPoint>('Readings');
    // const my_collection = afs.firestore.collection('Readings')

    const doc1 = my_collection.doc('Example Day');
    const collection2 = doc1.collection<dataPoint>('<Date>');
    const doc2 = collection2.doc('Example Reading');
    console.log(doc2.get());
    this.data$ = doc2;
   }

  get_data(): AngularFirestoreDocument<dataPoint> {
    return this.data$;
  }
  
}

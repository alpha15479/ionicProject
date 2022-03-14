import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { Final } from '../models/final.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  id: string;
  topic: string;
  detail: string;
  image: string;
  link: string;
  constructor(public firestore: AngularFirestore) { }

  update(id, final: Final) {
    return this.firestore.collection('finalList').doc<Final>(id).update(final);
  }


  getList(): Observable<Final[]> {
    return this.firestore.collection<Final>('finalList').valueChanges();
  }

  getDetail(finalId: string): Observable<Final> {
    return this.firestore.collection('finalList').doc<Final>(finalId).valueChanges();
  }
}

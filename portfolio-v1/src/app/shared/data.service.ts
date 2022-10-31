import { Injectable } from '@angular/core';
import { IContactForm } from '../contact/contact-form.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public createCollection(path: string) {
    return this.firestore.collection(path).valueChanges();
  }

  public saveContactDetails(details: IContactForm) {
    const { name, email, message, contactNumber } = details;
    return this.firestore.collection('email-list')
      .add({
        name,
        email,
        message,
        contactNumber,
        read: false,
        date: new Date()
      });
  }
}

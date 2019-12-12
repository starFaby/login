import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  onLOginGoogle(){
    return this.afAuth.auth.signInWithPopup( new  firebase.auth.GoogleAuthProvider());
  }
  onRegisterUser(email: string, pass: string) {
    return new Promise((resolve, reyect) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reyect(err));
    });
  }

  onLoginEmail(email: string, pass: string) {
    return new Promise((resolve, reyect) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reyect(err));
    });
  }

  onGetAuth(){
    return this.afAuth.authState.map(auth => auth);
  }
  offLogout() {
    return this.afAuth.auth.signOut();
  }
}

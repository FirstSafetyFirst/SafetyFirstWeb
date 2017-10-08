import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

items: FirebaseListObservable<any[]>;

constructor(public af: AngularFireDatabase) {

  const news$ : FirebaseListObservable<any> = af.list('news');
  news$.subscribe(
        val => console.log(val)
      );
}

}

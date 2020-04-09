import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Ludmyla Soares';

ngOnInit(): void {
  // Configurações do seu app web Firebase.
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCb40c3XZCzHvXR-eS4Vv1ZHiEpPYO7rPI",
    authDomain: "jta-passaro-urbano.firebaseapp.com",
    databaseURL: "https://jta-passaro-urbano.firebaseio.com",
    projectId: "jta-passaro-urbano",
    storageBucket: "jta-passaro-urbano.appspot.com",
    messagingSenderId: "687966901094",
    appId: "1:687966901094:web:1375e12ef28944ded02ea7",
    measurementId: "G-8BHREM9RTG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}

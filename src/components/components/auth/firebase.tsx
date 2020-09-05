import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDFgNZGgi3Zv19HhezN84_g8I8P19pUeFQ",
    authDomain: "my-project-1495095462490.firebaseapp.com",
    databaseURL: "https://my-project-1495095462490.firebaseio.com",
    projectId: "my-project-1495095462490",
    storageBucket: "my-project-1495095462490.appspot.com",
    messagingSenderId: "230760155622",
    appId: "1:230760155622:web:cebe899309e0a0076eee27"
};

const initialState : any = {
    "about" : null,
    "experience": null,
    "education": null,
    "skills": null,
    "interests": null,
    "location": null
};


class Firebase {
    db: any;
    storage: any;
    constructor() {
        app.initializeApp(config);
        this.db = app.database();
        this.storage = app.storage();
    }
    writeUserData (data: any, url: any) {
        this.db.ref(`${url}`).set(data);
        console.log('DATA SAVED');
    }
}

export default new Firebase();
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default class InitFirebase{
    static MyInstance  = null;

    _app = null;
    _db= null;

    static async getInstance(){
        if (InitFirebase.myInstance == null) {
            InitFirebase.myInstance = new InitFirebase(); 
            await InitFirebase.myInstance.init();           
        }        
        return this.myInstance;
        
        
    }
    async init(){
        console.log('init');
        if(this._db===null){
            const firebaseConfig = {
                apiKey: "AIzaSyDzIT_JVqLgsxit71KS2ulYr44UXzAb3OI",
                authDomain: "bingo-5b085.firebaseapp.com",
                databaseURL: "https://bingo-5b085.firebaseio.com",
                projectId: "bingo-5b085",
                storageBucket: "bingo-5b085.appspot.com",
                messagingSenderId: "864945342006",
                appId: "1:864945342006:web:f939ad69a4f5c32e9cba97"
              };
            this._app = await initializeApp(firebaseConfig);
            this._db = getFirestore(this._app);
            console.log('getInstance----------->',this._app)
        }
         

    }

    getDB() {
        console.log('getDB----------->',this._app)
        return this._db
    }

}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
    getDatabase,
    ref, set, onChildAdded
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyvgn2vc9rcJMm_dAQ9tkXaPHAWV38zds",
    authDomain: "zzzadmin.firebaseapp.com",
    databaseURL: "https://zzzadmin-default-rtdb.firebaseio.com",
    projectId: "zzzadmin",
    storageBucket: "zzzadmin.appspot.com",
    messagingSenderId: "887309268531",
    appId: "1:887309268531:web:96cdc32490d9a1646c9546",
    measurementId: "G-S46QY5QBY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

var a = document.getElementById("task");
var titleinp = document.getElementById("title");
var parent = document.getElementById("Parent");


window.saveTask = function () {
    var obj = {
        task: a.value,
        title: titleinp.value,
    };
    obj.id = Math.random().toString().slice(2);
    let reference = ref(database, `tasks/${obj.id}/`);
    set(reference, obj);
    console.log(obj);
};
function getData() {
    let reference = ref(database, "tasks/");
    let arr = [];
    onChildAdded(reference, function (data) {
        arr.push(data.val());
        console.log(arr);
        parent.innerHTML = "";
        for (var i = 0; i < arr.length; i++) {
            parent.innerHTML += `<li>${arr[i].task}</li>`;
        }

    });
}
getData();


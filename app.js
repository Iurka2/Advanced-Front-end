// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
// import {
// 	getFirestore,
// 	collection,
// 	onSnapshot,
// 	doc,
// 	updateDoc,
// 	deleteDoc,
// 	addDoc
// } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAueRn3EDvb_jI5fw_9RXSUuK8Oc-7OgcY",
//   authDomain: "final-exam-350c1.firebaseapp.com",
//   projectId: "final-exam-350c1",
//   storageBucket: "final-exam-350c1.appspot.com",
//   messagingSenderId: "540821028972",
//   appId: "1:540821028972:web:d60c691b890268a1bfd849"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// // reference to database
// const _db = getFirestore();
// // reference to users collection in database
// const _messages = collection(_db, "messages");


// // Reference messages collection
// var messagesRef = firebase.database().ref('messages');


// onSnapshot(_messages, snapshot => {
// 	// mapping snapshot data from firebase in to user objects
// 	_users = snapshot.docs.map(doc => {
// 		const user = doc.data();
// 		user.id = doc.id;
// 		return user;
// 	});
// 	appendUsers(_users);
// 	showLoader(false);
// });
// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('name');
//   var email = getInputVal('email');
//   var message = getInputVal('message');

//   // Save message
//   saveMessage(name, email, message);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name,  email,  message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     email:email,
//     message:message
//   });
// }
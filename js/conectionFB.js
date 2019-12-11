// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCFKfcL2YDnftkaygsN9-bljUzPtdDDXu4",
	    authDomain: "bpyia-fc64a.firebaseapp.com",
	    databaseURL: "https://bpyia-fc64a.firebaseio.com",
	    projectId: "bpyia-fc64a",
	    storageBucket: "bpyia-fc64a.appspot.com",
	    messagingSenderId: "45088818013",
	    appId: "1:45088818013:web:db0529eaa4cb32f7959eb4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function sendComment(){
	var problem = document.getElementById('problem').value;
	var description = document.getElementById('descriptionProblem').value;
	db.collection("Comments").add({
		problem: problem,
		description: description
	}).then(function(doc){
		alert("enviado");
		console.log("Documento escrito con ID: ", doc.id);
	}).catch(function(err){
		console.error("Error al añadir el documento: ", err);
	});

};

function init(){
	var formCommentindex = document.getElementById('modalCommentIndex');
	formCommentindex.addEventListener('submit',function(evento){evento.preventDefault();});
}

init();
import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC3Xm7kn3h466iLNI_0hrP6BJcZHr0HoyM',
  authDomain: 'mentors-dashboard-46e1e.firebaseapp.com',
  databaseURL: 'https://mentors-dashboard-46e1e.firebaseio.com',
  projectId: 'mentors-dashboard-46e1e',
  storageBucket: 'mentors-dashboard-46e1e.appspot.com',
  messagingSenderId: '653187679164',
};
const fire = firebase.initializeApp(config);

const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('repo');

const fb = {
  login: () => fire.auth().signInWithPopup(provider),
  logout: () => fire.auth().signOut(),
};

export default fb;


/* login() {
  fb.login().then(result => {
    this.state.user = result.user
    this.state.token = result.credential.accessToken;
  })
}
.then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
}); */

$(document).ready(function(){
  const firebaseConfig= {
    apiKey: "AIzaSyBCgr_jWhxspwnUdHzMf7GDImFmUCaCYfw",
    authDomain:"blogsy-c424d.firebaseapp.com",
    databaseURL:"https://blogsy-c424d.firebaseio.com/",
    storageBucket: "gs://blogsy-c424d.appspot.com"
  };


  firebase.initializeApp(firebaseConfig);
  console.log("initial");

  const auth = firebase.auth();

  const storageRef = firebase.storage().ref();
  const profile = storageRef.child('img/profile2.jpg');

  profile.getDownloadURL().then(function(url){
    $('.img-profile').attr('src', url);
  });

  const btnLogout = $('#btnLogout');
  btnLogout.click(() => {
    auth.signOut();
  });

  const btnWriting = $('#btnWriting');
  btnWriting.click(() => {
    window.location.replace('/writing?pageNum=0');
  });

  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
    }
    else {
      window.location.replace('/');
    }
  });

});

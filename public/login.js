$(document).ready(function(){
  const firebaseConfig= {
    apiKey: "AIzaSyBCgr_jWhxspwnUdHzMf7GDImFmUCaCYfw",
    authDomain:"blogsy-c424d.firebaseapp.com",
    databaseURL:"https://blogsy-c424d.firebaseio.com/",
    storageBucket: "gs://blogsy-c424d.appspot.com"
  };

  firebase.initializeApp(firebaseConfig);

  const txtEmail = $('#txtEmail');
  const txtPassword = $('#txtPassword');
  const btnLogin = $('#btnLogin');
  const btnLogout = $('#btnLogout');

  const auth = firebase.auth();
  btnLogin.click(()=>{
    const email = txtEmail.val();
    const pass = txtPassword.val();
    const promise = auth.signInWithEmailAndPassword(email,pass);

    promise.catch((e) => {
      console.log(e.message)
    });
  });

  btnLogout.click(() => {
    auth.signOut();
  })

  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      btnLogin.addClass('hide');
      txtEmail.addClass('hide');
      txtPassword.addClass('hide');
      btnLogout.removeClass('hide');

      $('#txtLogin').text('welcome' + firebaseUser.email);
      console.log('already logged in');

      window.location.replace('/home');
    }


    else {
      txtEmail.removeClass('hide');
      txtPassword.removeClass('hide');
      btnLogin.removeClass('hide');
      btnLogout.addClass('hide');
      $('#txtLogin').text('need to login. . .');

      console.log('not logged in');
    }
  });
});

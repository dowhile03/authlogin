function signin() {
    // alert('hii')
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().useDeviceLanguage()
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        document.querySelector("#sign-out").style.display="block";
        var useremail = document.querySelector('#user-email')
        useremail.innerHTML = user.email;
        var username = document.querySelector('#user-name')
        username.innerHTML = user.displayName
        var userPic = document.createElement("img");
        userPic.src=user.photoURL;
        userPic.height = '100px';
        userPic.width = '100%'
        document.getElementById('user-image').appendChild(img);
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
      });
} 
  function signout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert('signout successful')
      }).catch(function(error) {
        // An error happened.
      });
  }
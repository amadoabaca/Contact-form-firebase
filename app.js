// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCsR7-B_PtF1ZqKZ4L7Mb2zyFlAwhlrcgs",
  authDomain: "amado-abaca.firebaseapp.com",
  databaseURL: "https://amado-abaca.firebaseio.com",
  projectId: "amado-abaca",
  storageBucket: "amado-abaca.appspot.com",
  messagingSenderId: "624636398830",
  appId: "1:624636398830:web:c4757e3d86b45f01d4f7ff",
  measurementId: "G-Z0B37BMJXS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// referencia a contactInfo
let contactInfo = firebase.database().ref("contact");

// event listener del submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   input de lo valores
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}


// success

function sendAnimation(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Mensaje enviado!'
    })
  }



// Guarga el mensaje en firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();
  sendAnimation()

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

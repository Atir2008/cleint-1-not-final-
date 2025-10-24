var firebaseConfig = {
  apiKey: "AIzaSyDNtH0N5XPLuaZC6yfwwag8GOjrrQnOrNU",
  authDomain: "clientwebsite-765da.firebaseapp.com",
  projectId: "clientwebsite-765da",
  storageBucket: "clientwebsite-765da.firebasestorage.app",
  messagingSenderId: "1079483366831",
  appId: "1:1079483366831:web:519a3622172acf6b07435a",
  measurementId: "G-HDC2T5FE4D"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);





// sign in with google
function signup()
{
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase 
            .auth()
            .signInWithPopup(provider)
            .then(function(response){
                console.log(response);
                
            })
            .catch(function(error){
                console.log(error);
                
            })

}







function calculateBMI() {
  var feet = +document.getElementById("feet").value;
  var inches = +document.getElementById("inches").value;
  var weight = +document.getElementById("weight").value;
  var age = +document.getElementById("age").value;

  var gender = document.getElementById("aks").checked ? "Male" :
               document.getElementById("akk").checked ? "Female" : "None";

  if (!feet || !weight || !age || gender === "None") {
    document.getElementById("result").innerHTML = " Please fill all fields!";
    return;
  }

  var totalInches = feet * 12 + inches;
  var heightMeters = totalInches * 0.0254;
  var bmi = weight / (heightMeters * heightMeters);
  bmi = bmi.toFixed(1);

  var category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

document.getElementById("result").innerHTML =
  "<div style='margin-top: 20px; padding: 10px; border: 1px solid white; border-radius: 8px;  color: white;'>" +
  "<b>Your BMI:</b> " + bmi + "<br>" +
  "<b>Status:</b> " + category + "<br>" +
  "<b>Gender:</b> " + gender + "<br>" +
  "<b>Age:</b> " + age + " years" +
  "</div>";

}

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menu.classList.add("hidden");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lenis for smooth scrolling
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.01, // smooth speed
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const fadeElements = document.querySelectorAll(".fade-element");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-visible");
          entry.target.style.transitionDelay = `${entry.target.dataset.delay || 0}s`;
        } else {
          entry.target.classList.remove("fade-visible");
        }
      });
    },
    {
      threshold: 0.001, 
      rootMargin: "0px 0px -1% 0px", 
    }
  );

  fadeElements.forEach((el) => observer.observe(el));
});


function contact() {

    var names = document.getElementById("username").value.trim() ;
    var email = document.getElementById("email").value.trim();
    var textarea = document.getElementById("textarea").value.trim();
    var button = document.getElementById("button");

    if (names === "" || email === "" || textarea === "") {
        console.log("Please enter all values.");
        ;
    }

   var objects = {
        user_name: names,
        user_email: email,
        user_textarea: textarea,
    };

    firebase.database().ref("users_contact").push(objects, function(error) {
        if (error) {
            console.error("Error sending data:", error);
            alert("Failed to send message. Try again.");
        } else {
            console.log("Data sent successfully!");
            button.disabled = true;           
            button.textContent = "Message Sent"; 

            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("textarea").value = "";
        }
    });
}


contact()



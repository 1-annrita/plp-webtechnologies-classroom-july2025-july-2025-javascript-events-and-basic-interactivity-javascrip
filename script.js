// 1.  Event handling for button

function changeColor() {
  const button = document.getElementById("myButton");
  const colors = ["red", "blue", "green", "purple", "orange", "pink"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  button.style.backgroundColor = randomColor;
}

// 2. At least 2 interactive features created from scratch

//toggle theme
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Carousel
let images = [
  "imagess/code_girl1.jpg",
  "imagess/comp.jpg",
  "imagess/comp2.jpg",
  "imagess/code_girl.jpg",
];
let currentIndex = 0;
function showImage() {
  document.getElementById("carouselImage").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

setInterval(nextImage, 3000); // Change image every 3 seconds



// 3. A fully functioning custom form validation (no HTML5-only validation)
document.getElementById("myForm").onsubmit = function (event) {
  event.preventDefault(); // Prevent form submission

  //   fetch form values
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // clear previous error messages
  document.getElementById("usernameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  let isValid = true;

  // validate username
  if (username === "") {
    document.getElementById("usernameError").innerText = "Username is required";
    isValid = false;
  } else if (username.length < 3) {
    document.getElementById("usernameError").innerText =
      "Username must be at least 3 characters";
    isValid = false;
  }

  // validate email
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format";
    isValid = false;
  }

  // validate password
  let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
  if (password === "") {
    document.getElementById("passwordError").innerText = "Password is required";
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").innerText =
      "Invalid password format";
    isValid = false;
  }
  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
  }
};

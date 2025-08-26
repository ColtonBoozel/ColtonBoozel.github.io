function checkCode() {
  const enteredCode = document.getElementById("access-code").value;
  const correctCode = "Patterson1234";

  if (enteredCode === correctCode) {
    // Save flag in sessionStorage
    sessionStorage.setItem("AccessCodeJS", "granted");

    // Hide overlay and show content
    document.getElementById("overlay").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    alert("Incorrect code. Please try again.");
  }
}

function precheck() {
  // Check if user already entered the correct code
  if (sessionStorage.getItem("AccessCodeJS") === "granted") {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("content").style.display = "none";
  }
}

// Run check on load
document.addEventListener("DOMContentLoaded", precheck);

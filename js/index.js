document.getElementById("signupbtn").onclick= function(){showsignup()};

function showsignup() {
  document.getElementById("validateuser").style.display='flex';
  document.getElementById("signup").style.display='flex';
  document.getElementById("login").style.display='none';
}
document.getElementById("loginbtn").onclick= function(){showlogin()};

function showlogin() {
  document.getElementById("validateuser").style.display='flex';
  document.getElementById("login").style.display='flex';
  document.getElementById("signup").style.display='none';
}

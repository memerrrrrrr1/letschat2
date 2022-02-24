function adduser(){

login_user_name=document.getElementById("user_name").value;

localStorage.setItem("username", login_user_name);
window.location="kwitter_page.html";
}
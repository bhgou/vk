const sendButton = document.getElementById("submit")
const email = document.getElementById("email")
const password = document.getElementById("contact_no")
if(email.textContent != ""){
    if(password != ""){
        sendButton.addEventListener( "click" , () => open("https://vk.com"));
    }
}
//who
const body = document.body;
const form = document.querySelector("#newClient");
const input= document.querySelector("#fname");

//what
function submitForm(e) {
    e.preventDefault()
    console.log(input.value);
//save to Local Storage
    localStorage.setItem("New Client",input.value);
}
//when
form.addEventListener("submit", submitForm);




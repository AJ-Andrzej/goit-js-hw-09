const form = document.querySelector(".feedback-form")
const storageKey = "feedback-form-state"
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener("input", formInputHandeler)
form.addEventListener("submit", formSubmitHandler)

function formInputHandeler(event) {
    const email = emailInput.value;
    const message = messageInput.value;
    const data = JSON.stringify({ email, message });
    localStorage.setItem(storageKey, data)
}

function formSubmitHandler(event) {
    event.preventDefault();
    const email = emailInput.value;
    const message = messageInput.value;
    if (email === "" || message === "") return;
    console.log({ email, message })
    localStorage.removeItem(storageKey)
    form.reset();

}
const jsnData = localStorage.getItem(storageKey) ?? "";
try {
const inputData = JSON.parse(jsnData)
emailInput.value = inputData.email;
messageInput.value = inputData.message;
} catch {
emailInput.value = "";
messageInput.value = "";
}
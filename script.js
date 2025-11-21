let workers = JSON.parse(localStorage.getItem("workers") || "[]")


const ajoutModal = document.getElementById("modal");
const btnModal = document.getElementById("addWorkerBtn");
const closeModal = document.getElementById("closeModal");
const formModal = document.getElementById("workerForm");
const listModal = document.getElementById("unassignedList");
const ajoutExp = document.getElementById("addExpBtn");
const listExp = document.getElementById("exp-list");
let expIndex = 1;

btnModal.addEventListener("click", () => {
    ajoutModal.classList.remove("hidden");
})
closeModal.addEventListener("click", () => {
    ajoutModal.classList.add("hidden");
})

formModal.addEventListener("submit", (e) => {
    e.preventDefault()
    let nameWorker = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    const photoWorker = document.getElementById("photo").value;
    let email = document.getElementById("email").value;
    let numeroWorker = document.getElementById("numero").value;
    
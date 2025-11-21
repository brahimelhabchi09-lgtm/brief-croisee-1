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
    let nameEreur = document.getElementById("nameEreur");
    let emailEreur = document.getElementById("emailEreur");
    let numeroEreur = document.getElementById("numeroEreur");
    let emailregex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let numnberregex = /^[0-9]{10}$/
    let Expériences = document.querySelectorAll(".Expérience")


    if (nameWorker.length < 3) {
        nameEreur.textContent = "Le nom doit étre 3 caractisques ou plus";
        nameEreur.classList.remove("hidden")
        return;
    } else {
        nameEreur.classList.add("hidden");
    }
    if (!emailregex.test(email)) {
        emailEreur.textContent = "L email non valide";
        emailEreur.classList.remove("hidden")
        return;
    } else {
        emailEreur.classList.add("hidden");
    }

    if (!numnberregex.test(numeroWorker)) {
        numeroEreur.textContent = "Le numero non valide";
        numeroEreur.classList.remove("hidden");
        return;
    } else {
        numeroEreur.classList.add("hidden");
    }

    let ExpArr = [];
    let erreurs = false;
    Expériences.forEach((Expérience, index) => {
        let titre = document.getElementById(`titre-${index + 1}`).value
        let titreErreur = document.getElementById(`titreErreur-${index + 1}`)
        let entreprise = document.getElementById(`entreprise-${index + 1}`).value
        let entrepriseErreur = document.getElementById(`entrepriseErreur-${index + 1}`)
        let dateDebut = document.getElementById(`dateDebut-${index + 1}`).value
        let dateDebutErreur = document.getElementById(`dateDebutErreur-${index + 1}`)
        let dateFin = document.getElementById(`dateFin-${index + 1}`).value
        let dateFinErreur = document.getElementById(`dateFinErreur-${index + 1}`)

        if (titre.length < 3) {
            titreErreur.textContent = "Le titre doit étre 3 caractisques ou plus";
            titreErreur.classList.remove("hidden")
            erreurs = true;
            return;
        } else {
            titreErreur.classList.add("hidden");
        }
        if (entreprise.length < 3) {
            entrepriseErreur.textContent = "Le entreprise doit étre 3 caractisques ou plus";
            entrepriseErreur.classList.remove("hidden")
            erreurs = true;
            return;
        } else {
            entrepriseErreur.classList.add("hidden");
        }
        if (new Date(dateDebut) >= Date.now()) {
            dateDebutErreur.textContent = "Mauvais date";
            dateDebutErreur.classList.remove("hidden")
            erreurs = true;
            return;
        } else {
            dateDebutErreur.classList.add("hidden")

        }
        if (new Date(dateDebut) >= new Date(dateFin)) {
            dateFinErreur.textContent = "Mauvais date";
            dateFinErreur.classList.remove("hidden")
            erreurs = true;
            return;
        } else {
            dateFinErreur.classList.add("hidden")

        }
        const exp = {
            titre: titre,
            entreprise: entreprise,
            dateDebut: dateDebut,
            dateFin: dateFin
        }
        ExpArr.push(exp)
    })

    if (erreurs) return;

    let worker = {
        id: Date.now(),
        name: nameWorker,
        email: email,
        numero: numeroWorker,
        url: photoWorker,
        role: role,
        status: "insigned",
        Expériences: ExpArr,
    }
    workers.push(worker)
    localStorage.setItem("workers", JSON.stringify(workers))
    formModal.reset()
    ajoutModal.classList.add("hidden");
    displayWorkerList();
})
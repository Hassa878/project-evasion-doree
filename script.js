const boutonVacances = document.getElementById("monBouton")
const message = document.getElementById("message")
boutonVacances.addEventListener("click", function()
{
message.textContent = "Préparer vos valises"
})

const boutonMaldives = document.getElementById("boutonMaldives")
const messageMaldives = document.getElementById("messageMaldives")
boutonMaldives.addEventListener("click", function()
{
messageMaldives.textContent = "Direction le lagon" 
})

const boutonBali = document.getElementById("boutonBali")
const messageBali = document.getElementById("messageBali")
boutonBali.addEventListener("click", function()
{
messageBali.textContent = "Excellent voyage à Bali"
})

const boutonZanzibar = document.getElementById("boutonZanzibar")
const messageZanzibar = document.getElementById("messageZanzibar")
boutonZanzibar.addEventListener("click", function()
{
messageZanzibar.textContent = "Départ pour l'afrique"
})

const boutonSeychelles = document.getElementById("boutonSeychelles")
const messageSeychelles = document.getElementById("messageSeychelles")
boutonSeychelles.addEventListener("click", function()
{
messageSeychelles.textContent = "L'océan indien vous attend"
})

const boutonLaréunion = document.getElementById("boutonLaréunion")
const messageLaréunion = document.getElementById("messageLaréunion")
boutonLaréunion.addEventListener("click", function()
{
messageLaréunion.textContent = "Randonné au Volcan"
})

const formulaire = document.getElementById("monFormulaire")
const confirmation = document.getElementById("confirmation")
//au lieu de "click", pour un formulaire on utilise "submit"
formulaire.addEventListener("submit", function(event)
{
//cette ligne enpêche de se vider/recharger
event.preventDefault();
//on récupère le nom de la personne à tapé//
const nomTape = document.getElementById("nom").value;
confirmation.textContent ="Merci " + nomTape + ", nous vous répondrons bientôt !";
});

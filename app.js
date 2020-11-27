const RESPONSES = ["c", "d", "c", "b", "b"];
let userResponses = [];
let checkArray = [];

const FORM = document.querySelector(".form-quizz");
const titleResult = document.querySelector(".resultats h2");
const aideResult = document.querySelector(".aide");
const noteResult = document.querySelector(".note");
const ALLQUESTION = document.querySelectorAll(".question-block");

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    

    for (let i = 1; i <= RESPONSES.length; i++) {
		/** Et on push le resultat du user dans le tableau associer
		 * grâce au querySelector qui récupère la valeur de l'input 'checked' dont la question et q{i}
		 * avec i qui part de 1 jusqu'à responses.length
		 * */
		userResponses.push(
			document.querySelector(`input[name="q${i}"]:checked`).value
		);
    }
    console.log(userResponses)
    /** On appel la fonction checkIsTrue */
	checkIsTrue(userResponses);
	
	// ici userResponses = [] pour réinitialiser le tableau d'entré
	userResponses = [];

});

function checkIsTrue(array) {
	/** On boucle tant que i < la longueur de notre tableau de reponse */
	for (let i = 0; i < array.length; i++) {
		/** Si ce que l'utilisateur a envoyé === à l'élément dans notre tableau responses */
		if (array[i] === RESPONSES[i]) {
			// on retourne true
			checkArray.push(true);
		} else {
			// sinon false
			checkArray.push(false);
		}
	}
	console.log(checkArray);
	displayResult(checkArray);
	colorErrors(checkArray);
	/** On réinitialise le tableau checkArray */
    checkArray = [];
    
    
}

function displayResult(array) {
	const nbFalse = array.filter((item) => item === false).length;
	switch (nbFalse) {
		case 0:
			titleResult.innerText = "🌍	✅ Bravo c'est un sans faute ! ✅	  🌎";
			aideResult.innerText = "";
			noteResult.innerText = "🌌5/5🪐";
			break;
		case 1:
			titleResult.innerText = "🌍	Pas fou, mais j'espere que les questions sur le système solaire ont été validé ! 😡	  🌎";
			aideResult.innerText = "";
			noteResult.innerText = `🌌${5-nbFalse}/5🪐`;
			break;
		case 2:
			titleResult.innerText = "🌍	Pas fou, mais j'espere que les questions sur le système solaire ont été validé ! 😡	  🌎";
			aideResult.innerText = "";
			noteResult.innerText = `🌌${5-nbFalse}/5🪐`;
			break;
		case 3:
			titleResult.innerText = "🌍	😡T'es vraiment pas fou😡  🌎";
			aideResult.innerText = "🤨";
			noteResult.innerText = `🌌${5-nbFalse}/5🪐`;
			break;
		case 4:
			titleResult.innerText = "🌍	😡T'es vraiment pas fou😡  🌎";
			aideResult.innerText = "🤨";
			noteResult.innerText = `🌌${5-nbFalse}/5🪐`;
			break;
		case 5:
			titleResult.innerText = "🌍	😡😡NUUUULLL😡😡  🌎";
			aideResult.innerText = "Bouuh la note de merde 😂";
			noteResult.innerText = `🌌${5-nbFalse}/5🪐`;
			break;
		default:
			
		
	}
}

function colorErrors(arrayBool) {
	/** On boucle tant que i < arrayBool */
	for (let i = 0; i < arrayBool.length; i++) {
		/** Si la valeur contenu dans l'index i === true */
		if (arrayBool[i] === true) {
			// alors on affiche un background de couleur vert
			ALLQUESTION[i].style.background = "lightgreen";
		} else {
			/** Sinon c'est rouge avec l'ajout d'une classe echec */
			ALLQUESTION[i].style.background = "#ffb8b8";
			ALLQUESTION[i].classList.add("echec");

			/** On enlève cette classe au bout de 500 miliseconde grâce à setTimeout
			 * comme ça, si l'utilisateur souhaite de nouveau soumettre le formulaire et qu'il se trompe de nouveau
			 * La classe pourra être de nouveau appliqué
			 */
			setTimeout(() => {
				ALLQUESTION[i].classList.remove("echec");
			}, 500);
		}
	}
}

/** Pour toutes les questions, on créer une boucle forEach (pour chaque)
 * avec associer un eventLister, ici le click
 * pour dire que sur chaque question, dès qu'on click dessus, son background devient blanc.
 */
ALLQUESTION.forEach((question) => {
	question.addEventListener("click", () => {
		question.style.background = "#FFF";
	});
});
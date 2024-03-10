let generateImageForm = 
	document.getElementById('generate-image-form'); 
let formInput = 
	document.getElementById('input-value'); 
let imageContainerText = 
	document.getElementById('imageContainerText'); 
let imageGenerated = 
	document.getElementById('generated-image'); 
let imageContainer = 
	document.getElementById('images-visible'); 

async function fetchImages(category) { 
	try { 
		let response = 
		await fetch(`use a API`); 
		if (!response.ok) { 
			throw new Error('Unable to fetch the data'); 
		} 
		imageContainerText.innerText = 
		"Below is your generated Image:"; 
		imageContainer.style.display = "block"; 
		imageGenerated.src = response.url; 
		console.log(response.url); 
	} 
	catch (error) { 
		console.log(error); 
	} 
} 

generateImageForm.addEventListener('submit', (e) => { 
	e.preventDefault(); 
	let enteredText = formInput.value; 
	if (enteredText !== "") { 
		fetchImages(enteredText); 
	} 
	else { 
		imageContainerText.innerText = 
			"Input field can not be empty!"; 
	} 
})

console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully');
}

let image = document.querySelector('.catPic')

image.addEventListener('mouseover', function(){
	alert("You're hot")
})

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
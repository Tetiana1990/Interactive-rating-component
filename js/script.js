const ratingButtons = document.querySelectorAll(".rating-btn")
const submitBtn = document.getElementById("submit-btn");
const ratingCard = document.getElementById("rating-card");
const thankYouCard = document.getElementById("thank-you-card");
const selectedRatingText = document.getElementById("selected-rating");

let selectedRating = null;

ratingButtons.forEach((button) => {
	button.addEventListener("click", () => {
		ratingButtons.forEach((btn) =>{
			btn.classList.remove("active");
		});
		button.classList.add("active");

		selectedRating = button.textContent;
	});
});
submitBtn.addEventListener("click", () =>{
	if(!selectedRating) return;

	selectedRatingText.textContent = selectedRating;

	ratingCard.classList.add("hidden")

	thankYouCard.classList.remove("hidden");
});
console.log
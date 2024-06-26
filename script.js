const previous = document.querySelectorAll('.previous-btn');
const next = document.querySelectorAll('.next-btn');
const storiesSlider = document.querySelector('.stories');
const friendsSlider = document.querySelector('.suggestion-list');
const removeBtn = document.querySelectorAll('.remove');
const suggestions = document.querySelectorAll('.suggestion-friend');
const suggestionContainer = document.querySelector('.container-suggestion');

function slider() {
	let suggestionWidth = friendsSlider.firstElementChild.offsetWidth + 10;

	for (let i = 0; i < next.length; i++) {
		next[i].addEventListener('click', () => {
			if (i === 0)
				storiesSlider.scrollLeft += storiesSlider.firstElementChild.offsetWidth + 10;
			else if (i === 1)
				friendsSlider.scrollLeft += suggestionWidth;
		});
	}
	for (let i = 0; i < previous.length; i++) {
		previous[i].addEventListener('click', () => {
			if (i === 0)
				storiesSlider.scrollLeft -= storiesSlider.firstElementChild.offsetWidth + 10;
			else if (i === 1)
				friendsSlider.scrollLeft -= suggestionWidth;
		});
	}
	storiesSlider.addEventListener('scroll', () => {
		storiesSlider.scrollLeft <= 20
			? previous[0].classList.remove('show-btn')
			: previous[0].classList.add('show-btn');
		let maxScroll = storiesSlider.scrollWidth - storiesSlider.clientWidth - 20;
		storiesSlider.scrollLeft >= maxScroll
			? next[0].classList.add('hide-btn')
			: next[0].classList.remove('hide-btn');
		});
	friendsSlider.addEventListener('scroll', () => {
		friendsSlider.scrollLeft <= 20
			? previous[1].classList.remove('show-btn')
			: previous[1].classList.add('show-btn');
		let maxScroll = friendsSlider.scrollWidth - friendsSlider.clientWidth - 21;
		friendsSlider.scrollLeft >= maxScroll
			? next[1].classList.add('hide-btn')
			: next[1].classList.remove('hide-btn');
	});
}

function removeSuggestion() {
	let counter = 0;

	for (let i = 0; i < removeBtn.length; i++) {
		removeBtn[i].addEventListener('click', () => {
			removeBtn[i].parentElement.style.display = 'none';
			counter++;
			if (suggestions.length === counter)
				suggestionContainer.style.display = 'none';
		});
	}
}
slider();
removeSuggestion();
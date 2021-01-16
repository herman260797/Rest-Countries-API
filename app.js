const toggleBtn = document.getElementById('toggle');

const endpoint = 'https://restcountries.eu/rest/v2/all';
const cities = [];

fetch(endpoint)
 .then(Blob => Blob.json())
 .then(data => cities.push(...data))

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex);
    }); 
}

function displayMatches(){
    
    const matchArray = findMatches(this.value, cities);
    console.log(matchArray);
    const html = matchArray.map(place => {
        return `
     <li> 
 <span>${place.name}</span>   
 <span>${place.capital}</span> 
 <span class="population">${place.population}</span>
<span>${place.topLevelDomain}</span> 

    </li>
        
`;
    }).join('');
    suggestions.innerHTML = html;
    
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);


// toggle theme - dark & light
toggleBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});

// show and hide the filters (li tags)
filterBtn.addEventListener('click', () => {
	filterBtn.classList.toggle('open');
});

// close the modal
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});

searchEl.addEventListener('input', e => {
	const { value } = e.target;
	const countryName = document.querySelectorAll('.country-name');

	countryName.forEach(name => {
		if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
			// .card -> .card-body -> .country-name
			name.parentElement.parentElement.style.display = 'block';
		} else {
			name.parentElement.parentElement.style.display = 'none';
		}
	});
});








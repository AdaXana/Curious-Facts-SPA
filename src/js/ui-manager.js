import { getFavoriteFacts } from './storage-service.js';


function renderFact(factObject) {
    const descriptionElement = document.getElementById("fact-description-display");
    const factContainer = document.getElementById("fact-container-display");
    descriptionElement.innerText = factObject.text;
    factContainer.style.display = 'block';
}


const renderError = (error) => {
    const displayElement = document.getElementById("fact-description-display");
    const factContainer = document.getElementById("fact-container-display");
    displayElement.innerText = "Sorry, facts are currently unavailable.";
    factContainer.style.display = 'block';
    console.error("Rendering Error:", error);
};


function getCurrentFactText() {
    const factElement = document.getElementById("fact-description-display");
    return factElement.innerText;
};


function renderFavoritesList() {
    const favorites = getFavoriteFacts();
    const tableBody = document.getElementById('favorites-table-body');

    tableBody.innerHTML = '';
    if (favorites.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="3">You have no saved facts yet.</td></tr>';
        return;
    }

    const favoritesHTML = favorites.map(fact => {
        return `
            <tr>
                <td>${fact.text}</td>
                <td>
                    <button class="btn btn-delete" data-fact-id="${fact.id}"></button>
                </td>
            </tr>
        `;
    })
    
    tableBody.innerHTML = favoritesHTML.join('');
    
}

export { renderFact, renderError, getCurrentFactText, renderFavoritesList };
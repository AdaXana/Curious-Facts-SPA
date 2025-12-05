import { fetchFactData, extractFactText } from './data-service.js';
import { renderFact, renderError,renderFavoritesList } from './ui-manager.js';
import { saveFactToLocalStorage, removeFactFromLocalStorage } from './storage-service.js';


let currentFact = null;

const getAndRenderFact = async (endpoint = 'random') => {
    try {
        const data = await fetchFactData(endpoint);
        const factObject = extractFactText(data);
        currentFact = factObject;
        renderFact(factObject);
    } catch (error) {
        renderError(error);
    }
};


const handleAddFavorite = () => {
    if (!currentFact) {
        alert("Please fetch a fact first!");
        return;
    }
    const saveResult = saveFactToLocalStorage(currentFact);
    if (!saveResult.success) {
        alert(`Warning: ${saveResult.message}`);
    } else {
        alert("Fact saved successfully!");
        renderFavoritesList();
    }
};


const handleShowFavorites = () => {
    renderFavoritesList();
    const favoritesModule = document.getElementById('favorites-container');
    if (favoritesModule.style.display === 'block') {
        favoritesModule.style.display = 'none';
    } else {
        favoritesModule.style.display = 'block';
    }
};


const handleDeleteFavorite = (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const factId = e.target.dataset.factId;
        removeFactFromLocalStorage(factId);
        renderFavoritesList();
    }
};


document.addEventListener('DOMContentLoaded', () => {
    getAndRenderFact('today');

    document.getElementById("btn-other-fact").addEventListener('click', () => getAndRenderFact('random'));
    document.getElementById("btn-add-favs").addEventListener('click', handleAddFavorite);
    document.getElementById("btn-show-favs").addEventListener('click', handleShowFavorites);
    document.getElementById("favorites-table-body").addEventListener('click', handleDeleteFavorite);

});
import { fetchFactData, extractFactText } from './data-service.js';
import { renderFact, renderError, getCurrentFactText } from './ui-manager.js';

const getAndRenderFact = async () => {
    try {
        const data = await fetchFactData();
        const cleanText = extractFactText(data);
        renderFact(cleanText);
    } catch (error) {
        renderError(error);
    }
};


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn-other-fact").addEventListener('click', getAndRenderFact);

    getAndRenderFact();
});
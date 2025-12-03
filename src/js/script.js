const fetchFactData = async () => {
    const urlAPI = "https://uselessfacts.jsph.pl/random.json?language=en";
    try {
        const response = await fetch(urlAPI);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: Failed to fetch fact.`);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


function extractFactText(data) {
    if (!data || !data.text) {
        throw new Error("Invalid data structure provided for fact extraction.");
    }
    return {
        id: data.id,
        text: data.text
    };
}


const renderError = (error) => {
    const displayElement = document.getElementById("fact-description-display");
    displayElement.innerText = "Sorry, facts are currently unavailable.";
    console.error("Rendering Error:", error);
};


const getAndRenderFact = async () => {
    try {
        const data = await fetchFactData();
        const cleanText = extractFactText(data);
        renderFact(cleanText);
    } catch (error) {
        renderError(error);
    }
};


function renderFact(factObject) {
    const displayElement = document.getElementById("fact-description-display");
    displayElement.innerText = factObject.text;
    document.getElementById("first-fact").style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn-other-fact").addEventListener('click', getAndRenderFact);

    getAndRenderFact();
});








// const getData = async () => {
//     try {
//         const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        
//         if (!response.ok) {
//             throw new Error(`Error ${response.status}: Failed to fetch fact.`);
//         }
        
//         const data = await response.json();
        
//         const factText = data.text;
        
//         document.getElementById("fact-description-display").innerText = factText;
//         document.getElementById("first-fact").style.display = 'none';

//     } catch (error) {
//         console.error("API Call Error:", error);
//         document.getElementById("fact-description-display").innerText = "Sorry, facts are currently unavailable.";
//     }
// };


// document.addEventListener('DOMContentLoaded', () => {

//     getData();
//     // Aquí conectaremos el botón de 'Show Other Fact'
// });
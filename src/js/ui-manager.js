function renderFact(factObject) {
    const displayElement = document.getElementById("fact-description-display");
    displayElement.innerText = factObject.text;
    document.getElementById("first-fact").style.display = 'none';
}


const renderError = (error) => {
    const displayElement = document.getElementById("fact-description-display");
    displayElement.innerText = "Sorry, facts are currently unavailable.";
    console.error("Rendering Error:", error);
};

export { renderFact, renderError };
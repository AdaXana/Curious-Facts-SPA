function getFavoriteFacts() {
    const storageKey = 'favoriteFacts';
    const storedFactsString = localStorage.getItem(storageKey);
    return storedFactsString ? JSON.parse(storedFactsString) : [];
}

function saveFactToLocalStorage(factObject) {
    const storageKey = "favoriteFacts";
    const storedFactsString = localStorage.getItem(storageKey);
    let favoriteFacts = storedFactsString ? JSON.parse(storedFactsString) : [];
    const isDuplicate = favoriteFacts.some(fact => fact.id === factObject.id);
    if (isDuplicate) {
        console.warn(`Fact with ID ${factObject.id} is already in favorites.`);
        return { success: false, message: "Fact already saved." };
    }
    favoriteFacts.unshift(factObject);
    localStorage.setItem(storageKey, JSON.stringify(favoriteFacts));
    return { success: true, message: "Fact saved successfully." };
};


function removeFactFromLocalStorage(factId) {
    const storageKey = "favoriteFacts";
    let favoriteFacts = getFavoriteFacts();
    favoriteFacts = favoriteFacts.filter(fact => fact.id !== factId);
    localStorage.setItem(storageKey, JSON.stringify(favoriteFacts));
    return {success: true, message: "Fact removed successfully."};
}


export { getFavoriteFacts, saveFactToLocalStorage,removeFactFromLocalStorage };
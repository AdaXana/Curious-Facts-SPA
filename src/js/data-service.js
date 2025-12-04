const fetchFactData = async (endpoint = 'random') => {
    const urlAPI = `https://uselessfacts.jsph.pl/api/v2/facts/${endpoint}?language=en`;
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
};

export { fetchFactData, extractFactText };
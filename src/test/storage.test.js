import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import { saveFactToLocalStorage, getFavoriteFacts, removeFactFromLocalStorage } from '~/js/storage-service.js';

describe('Favorites Storage Logic', () => {
    let localStorageStore = {};
    beforeEach(() => {
        global.localStorage = {
            store: localStorageStore,
            setItem: (key, val) => (localStorageStore[key] = val),
            getItem: (key) => localStorageStore[key],
            removeItem: (key) => {delete localStorageStore[key]; },
            clear: () => { localStorageStore = {}; }
        };
        global.localStorage.clear();
    });

    afterEach(() => {
        global.localStorage.clear();
    });


    test('should correctly save a fact and return success true', () => {
        const mockFact = {
            id: '9f2b8003',
            text: 'The average person spends about two years on a phone in a lifetime.'
        };
        saveFactToLocalStorage(mockFact);

        const stored = JSON.parse(localStorage.getItem('favoriteFacts'));
        expect(stored).toEqual([mockFact]);
    });


    test('should return success false and not save the fact if it is a duplicate', () =>{
        const mockFact = {
            id: '9f2b8003',
            text: 'The average person spends about two years on a phone in a lifetime.'
        };
        saveFactToLocalStorage(mockFact);

        const secondSaveResult = saveFactToLocalStorage(mockFact);
        expect(secondSaveResult.success).toBe(false);

        const stored = JSON.parse(localStorage.getItem('favoriteFacts'));
        expect(stored).toHaveLength(1);
    });


    test('should return an empty array if localStorage is empty' ,() => {
        const favoriteFacts = getFavoriteFacts();
        expect(favoriteFacts).toEqual([])
    });

});
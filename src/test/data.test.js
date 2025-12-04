import { describe, test, expect } from 'vitest';
import { extractFactText } from '~/js/data-service.js';

describe('extractFactText', () => {
    test('should extract fact text and id from valid data from API', () => {
        const mockApiData = {
            id: 'randomID',
            text: 'This is the fact that should be extracted.',
            source: 'test'
        };
        const extractedText = extractFactText(mockApiData);

        expect(extractedText).toEqual({
            id: 'randomID',
            text: 'This is the fact that should be extracted.'
        });
    });

    test('should throw an error if data is invalid or missing the text property', () => {
        const invalidData = {
            id: 'corruptID',
            source: 'test'
        };
        expect(() => extractFactText(invalidData)).toThrow("Invalid data structure provided for fact extraction.");
    });
});
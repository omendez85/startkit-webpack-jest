const { suma } = require('../src/index');

describe('suma', () => {   
    test('Test A ', () => {
        expect(suma(10,3)).toBe(10);
    });

    test('Test B', () => {
        expect(suma(2, 3)).toBe(5);
    });
});
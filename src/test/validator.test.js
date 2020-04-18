const { validateField, validatorCard, maskify } = require('../lib/validator')

const inputCardNum = '4556364607935616';
const inputCardNum2 = '4559'
const pElem = `<p></p>`

describe('valiedField', () => {
    it('deberia ser una funcion', () => {
        expect(typeof validateField).toBe('function');
    });

    it('deberia retornar un boolean', () => {
        expect(typeof validateField(inputCardNum, pElem)).toBe('boolean')
    });

    it('deberia retornar un template con un mensaje si cumple la condicion', () => {
        const pElem = document.createElement('div');
        const output = `<small class="error">Debe contener 16 digitos.</small>`;
        expect(validateField(inputCardNum2, pElem)).toEqual(output)
    });

    it('deberia retornar true si no cumple la condicion', () => {
        expect(validateField(inputCardNum, pElem)).toEqual(true);
    });
})

describe('validatorCard', () => {
    it('deberia ser una funcion', () => {
        expect(typeof validatorCard).toBe('function');
    });

    it('deberia retornar un boolean', () => {
        expect(typeof validatorCard(inputCardNum)).toBe('boolean')
    });

    it('deberia retornar true', () => {
        expect(validatorCard(inputCardNum)).toBe(true)
    });

    it('deberia retornar false', () => {
        expect(validatorCard(inputCardNum2)).toBe(false)
    });
})

describe('maskify', () => {
    it('deberia ser una funcion', () => {
        expect(typeof maskify).toBe('function');
    });

    it('deberia retornar un string', () => {
        expect(typeof maskify(inputCardNum)).toBe('string');
    });

    it('deberia retornar el input si cumple la condicion', () => {
        expect(maskify(inputCardNum2)).toEqual(inputCardNum2)
    });

    it('deberia remplazar los digitos que cumplan la condicion', () => {
        const output = '############5616'
        expect(maskify(inputCardNum)).toEqual(output);
    });
})
/* test('validateField deberia ser una funcion', () => {
    expect(typeof validateField).toBe('function');
});

test('deberia retornar true si la longitud del string es de 16', () => {
    expect(validateField(inputCardNum, pElem)).toEqual(true);
});

test('deberia retornar un template con un mensaje', () => {
    const pElem = document.createElement('div');
    const output = `<small class="error">Debe contener 16 digitos.</small>`;
    expect(validateField(inputCardNum2, pElem)).toEqual(output)
}) */


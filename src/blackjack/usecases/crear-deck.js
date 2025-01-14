import _ from 'underscore';
// export const miNombre = 'Fernando';
// Esta función crea un nuevo deck

/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('Tipos de cartas es Obligatorio como un arreglo de string');
    
    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('Tipos de cartas es Obligatorio como un arreglo de string');
    // if (tiposDeCarta.length > 0) throw new Error('Tipos de cartas tiene que ser un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}

// aqui me esta importando el deck por defecto
// export default crearDeck;
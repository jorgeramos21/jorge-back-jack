// turno de la computadora
import { pedirCarta, valorCarta, crearCartaHTML } from './';
// import { crearCartaHTML } from './crear-carta-html';

/**
 * turno de l acomputadora
 * @param {Number} puntosMinimos puntos minimos que la computadora nececita para ganar
 * @param {HTMLElement} elemnto HTML para mostrar los puntos
 * @param {HTMLElemnt} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora,  deck = []) => {
    
    if (!puntosMinimos) throw new Error('puntos minimos es nesesarios');

    let puntosComputadora = 0;
    
    if (!puntosHTML) throw new Error('argumentos puntosHTML es necesario');

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}